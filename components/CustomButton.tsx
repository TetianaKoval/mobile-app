import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface Prop {
  title: string,
  handlePress: () => void,
  containerStyle?: string,
  textStyle?: string,
  isLoading?: boolean

}

const CustomButton:React.FC<Prop> = ({ title, handlePress, containerStyle, textStyle, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary min-h-[62px] rounded-xl justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50': null}`}
      disabled={isLoading}
    >
      <Text
        className={`text-primary font-psemibold text-lg ${textStyle}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
