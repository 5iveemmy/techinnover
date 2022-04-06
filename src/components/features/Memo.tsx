import styled from "styled-components";
import { Button, Container } from "../../globalStyles";

const MemoCover = styled.div`
  padding-bottom: 6rem;
`;

const MemoDiv = styled.div`
  border: 1px solid #dee1e6;
  box-sizing: border-box;
  box-shadow: 0px 24px 34px rgba(0, 0, 0, 0.03);
  border-radius: 15px;
  width: 1173px;
`;

const MemoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`;

const MemoLeft = styled.p`
  color: #757095;
  line-height: 32px;
  letter-spacing: -0.02em;
  font-size: 22px;
  width: 58rem;
`;

const MemoRight = styled.div``;

const Memo = () => {
  return (
    <MemoCover>
      <Container>
        <MemoDiv>
          <MemoWrap>
            <MemoLeft>
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </MemoLeft>
            <MemoRight>
              <Button orangeShade org round big>
                Get Started
              </Button>
            </MemoRight>
          </MemoWrap>
        </MemoDiv>
      </Container>
    </MemoCover>
  );
};

export default Memo;
