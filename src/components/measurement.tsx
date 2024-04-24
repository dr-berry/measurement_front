import React, { useEffect, useState } from "react";
import * as S from "../style";
import axios from "axios";
import { BASE_URL } from "../App";

const Measurement = () => {
  const [status, setStatus] = useState<string>("STOP");

  async function getStatus() {
    axios
      .get("http://api.greenberry.site:3000/measurement/status", {
        params: {
          deviceCode: window.localStorage.getItem("DEVICE_CODE"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setStatus(res.data);
      });
  }

  useEffect(() => {
    if (!window.localStorage.getItem("DEVICE_CODE")) {
      window.location.href = "/";
    }
    getStatus();
  }, []);

  return (
    <S.Wrapper>
      <S.DeviceCode>
        사용중인 디바이스 코드 : {window.localStorage.getItem("DEVICE_CODE")}
      </S.DeviceCode>
      <S.StatusText status={status}>{status}</S.StatusText>
      <S.MeasurementStartButton
        onClick={async () => {
          await axios
            .post(
              `${BASE_URL}/measurement/start`,
              {},
              {
                params: {
                  deviceCode: localStorage.getItem("DEVICE_CODE"),
                },
              }
            )
            .then(async () => {
              await getStatus();
            })
            .catch(() => {
              alert(
                "측정을 시작하지 못했습니다. [노승완 교수님]께 문의해주세요."
              );
            });
        }}
      >
        측정 시작
      </S.MeasurementStartButton>
      <S.Padding />
      <S.MeasurementStartButton
        onClick={async () => {
          await axios
            .put(
              `${BASE_URL}/measurement/end`,
              {},
              {
                params: {
                  deviceCode: localStorage.getItem("DEVICE_CODE"),
                },
              }
            )
            .then(async () => {
              await getStatus();
            })
            .catch(() => {
              alert(
                "측정을 종료하지 못했습니다. [노승완 교수님]께 문의해주세요."
              );
            });
        }}
      >
        측정 종료
      </S.MeasurementStartButton>
      <S.Padding />
      <S.MeasurementStartButton
        onClick={async () => {
          await axios
            .delete(`${BASE_URL}/measurement/unregister`, {
              params: {
                deviceCode: localStorage.getItem("DEVICE_CODE"),
              },
            })
            .then(() => {
              window.localStorage.clear();
              window.location.href = "/";
            })
            .catch(() => {
              alert(
                "디바이스 삭제를 실패했습니다. [노승완 교수님]께 문의해주세요."
              );
            });
        }}
      >
        디바이스 등록 해제
      </S.MeasurementStartButton>
    </S.Wrapper>
  );
};

export default Measurement;
