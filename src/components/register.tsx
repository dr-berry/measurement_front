import React, { useEffect, useRef } from "react";
import * as S from "../style";
import axios from "axios";

const Register: () => JSX.Element = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const code = window.localStorage.getItem("DEVICE_CODE");
    if (code) {
      window.location.href = "/measurement";
    }
  });

  return (
    <S.Wrapper>
      <div>디바이스 등록</div>
      <S.Input type="text" ref={inputRef} />
      <S.MeasurementStartButton
        onClick={async () => {
          console.log(inputRef.current?.value);

          await axios
            .post(
              "http://api.greenberry.site:3000/measurement/register",
              {},
              {
                params: {
                  deviceCode: inputRef.current?.value,
                },
              }
            )
            .then((res) => {
              if (res.status === 201) {
                window.localStorage.setItem(
                  "DEVICE_CODE",
                  `${inputRef.current?.value}`
                );
                window.location.href = "/measurement";
              }
            });
        }}
      >
        등록하기
      </S.MeasurementStartButton>
    </S.Wrapper>
  );
};

export default Register;
