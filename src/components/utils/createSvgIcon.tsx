import React from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

/**
 * Private module reserved for @material-ui/x packages.
 */
export default function createSvgIcon(
  paths: React.ReactElement<{ fill: string }, 'path'>[],
  displayName: string
) {
  const Component = (props: Omit<SvgIconProps, 'children'>) => (
    <SvgIcon {...props}>{paths}</SvgIcon>
  );

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  return React.memo(Component);
}
