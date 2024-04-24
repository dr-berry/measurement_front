import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 20px; */
`;

export const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DeviceCode = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MeasurementStartButton = styled.button`
  font-size: 16px;
  font-weight: bold;
`;

export const Padding = styled.div`
  height: 10px;
`;

export const StatusText = styled.div<{ status: string }>`
  font-size: 20px;
  font-weight: regular;
  color: ${(props) => (props.status === "STOP" ? "red" : "green")};
`;
