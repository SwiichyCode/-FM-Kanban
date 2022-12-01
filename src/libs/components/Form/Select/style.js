import styled from "styled-components";

export const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--medium-grey);
  }

  .current-select {
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--main-purple);
    border-radius: 4px;
    padding: 0 16px;
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      color: #000112;
    }
  }

  .current-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* position: absolute;
    top: 45px;
    left: 0; */
    background: var(--white);
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    border-radius: 8px;
    padding: 16px;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      option {
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
        color: #828fa3;
        cursor: pointer;
      }
    }
  }
`;
