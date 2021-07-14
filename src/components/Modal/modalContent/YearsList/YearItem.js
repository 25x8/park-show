import styled from "styled-components";

const YearItemBase = ({className, year, onItemClick, active, setActiveState}) => {



    return (
        <div
            className={`${className} ${active && 'active'}`}
            onClick={() => {
                setActiveState(!active)
                onItemClick(year)
            }}
        >
            <span>{year}</span>
        </div>
    )
}

export const YearItem = styled(YearItemBase)`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  border: 1px solid black;
  box-shadow: 0 0 4px black;
  cursor: pointer;
  width: 3rem;

  span {
    font-size: 24px;
    font-weight: bold;
  }

  &.active {
    background: #f39324;
    cursor: none;
  }
`;