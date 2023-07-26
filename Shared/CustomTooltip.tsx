import styled from "@emotion/styled";
import { Tooltip, tooltipClasses } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";

/**
 * @typedef {Object} CustomTooltipProps
 * @property {string} [className]
 * @property {import("@mui/system").Theme} [theme]
 */

type TooltipProps = React.ComponentProps<typeof Tooltip>;

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))<{ theme?: Theme }>(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#011B41",
    color: "#fff",
    // fontSize: theme?.typography?.pxToRem(13),
    // border: "1px solid #dadde9",
    // padding: 1,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#011B41",
  },
}));
