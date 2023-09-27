import React, {Suspense} from 'react';
import getIconComponent from './get-icon-component';
import {View} from 'react-native';
import {Icons} from '../enums/icons';

const CategoryComponent: React.FC<{icon: Icons}> = ({icon}) => {
  const IconComponent = getIconComponent(icon);

  if (!IconComponent) {
    return <View>Icon not found</View>;
  }

  return (
    <View>
      <Suspense fallback={<View>Loading...</View>}>
        <IconComponent />
      </Suspense>
    </View>
  );
};

export default CategoryComponent;
