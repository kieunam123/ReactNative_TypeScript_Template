import {NavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';

export const isMountedRef = React.createRef<boolean>();
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: any = undefined): void {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function reset(name: string): void {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.reset({index: 0, routes: [{name}]});
  }
}
