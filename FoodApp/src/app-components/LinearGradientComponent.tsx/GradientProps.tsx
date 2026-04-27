import React, { ReactNode } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

interface GradientComponentProps extends Omit<ViewProps, 'children'> {
  children?: ReactNode;
  colors?: string[];
  style?: StyleProp<ViewStyle>;
}

const GradientComponent: React.FC<GradientComponentProps> = ({
  children,
  colors = ['#EA7E79', '#F8B97C'],
  style,
  ...restProps
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors[0],
        },
        style,
      ]}
      {...restProps}>
      {children}
    </View>
  );
};

export default GradientComponent
