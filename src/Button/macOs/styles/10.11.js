import { css } from 'styled-components';

export default css`
  user-select: none;
  cursor: default;
  outline: none;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 1px rgba(0, 0, 0, .039);
  padding: 0 13px;
  line-height: 19px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  font-size: 13px;

  ${props => props.color === 'blue' ? css`
    background-image: linear-gradient(180deg, #6cb3fa 0%, #087eff 100%);
    border-top-color: #4ca2f9;
    border-bottom-color: #015cff;
    border-left-color: #267ffc;
    border-right-color: #267ffc;
    color: rgba(255, 255, 255, .9);

    &:active {
      background-image: linear-gradient(180deg, #4c98fe 0%, #0564e3 100%);
      border-top-color: #247fff;
      border-bottom-color: #003ddb;
      border-left-color: #125eed;
      border-right-color: #125eed;
      color: rgba(255, 255, 255, .9  );
    }
  ` : css`
      background-color: #ffffff;
      border-top-color: #c8c8c8;
      border-bottom-color: #acacac;
      border-left-color: #c2c2c2;
      border-right-color: #c2c2c2;
      color: rgba(255, 255, 255, .9);

      &:active {
        background-image: linear-gradient(180deg, #4c98fe 0%, #0564e3 100%);
        border-top-color: #247fff;
        border-bottom-color: #003ddb;
        border-left-color: #125eed;
        border-right-color: #125eed;
        color: rgba(255, 255, 255, .9 ) ;
      }
  `}
`;
