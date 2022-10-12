import { css } from "@emotion/react";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const reset = css`
  @import url('https://fonts.googleapis.com/css2?family=Sanchez:ital@0;1&family=Trirong:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: ${fonts.title};
    color: ${colors.gray[700]};
    font-size: 1rem;
    background-color: ${colors.gray[200]};
  }
`;
