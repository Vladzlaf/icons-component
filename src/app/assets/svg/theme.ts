import {createTheme} from '@rneui/themed';
export const theme = createTheme({
  lightColors: {
    primary: '#391090',
    secondary: '#6434CB',
    purpleOptional: '#C0A3FF',
    purpleExtraLight: '#CFB9FF',
    purpleLight: '#ECE3FF',
    white: '#FFFFFF',
    gray: '#434148',
    grayOptional: '#2C2B32',
    grayExtraLight: '#818085',
    grayLight: '#494753',
    grayMedium: '#373541',
    green: '#4DD874',
    black: '#04020B',
  },
  darkColors: {
    primary: '#391090',
    secondary: '#6434CB',
    purpleOptional: '#C0A3FF',
    purpleExtraLight: '#CFB9FF',
    purpleLight: '#ECE3FF',
    white: '#FFFFFF',
    white_15: 'rgba(255, 255, 255, 0.15)',
    white_17: 'rgba(255, 255, 255, 0.17)',
    white_31: 'rgba(255, 255, 255, 0.31)',
    white_40: 'rgba(255, 255, 255, 0.4)',
    white_45: 'rgba(255, 255, 255, 0.45)',
    white_50: 'rgba(255, 255, 255, 0.5)',
    white_60: 'rgba(255, 255, 255, 0.6)',
    white_80: 'rgba(255, 255, 255, 0.8)',
    gray: '#434148',
    gray_75: 'rgba(67, 65, 72, 0.75)',
    grayOptional: '#2C2B32',
    grayExtraLight: '#818085',
    grayLight: '#494753',
    grayMedium: '#373541',
    green: '#4DD874',
    black: '#04020B',
  },
  components: {
    Button: (props, theme) => ({
      buttonStyle:
        props.variant === 'main'
          ? {
              borderRadius: 24,
              paddingVertical: 12,
              marginBottom: 10,
            }
          : {
              borderRadius: 100,
              marginBottom: 12,
              paddingVertical: 18,
            },
      titleStyle:
        props.variant === 'main'
          ? {
              fontFamily: 'DMSans-Bold',
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 24,
              color: 'white',
            }
          : {
              fontFamily: 'DMSans-Bold',
              fontWeight: 'normal',
              fontSize: 14,
              lineHeight: 22,
              color: theme.colors.primary,
            },
      iconContainerStyle: {
        margin: 20,
      },
    }),
    LinearProgress: (props, theme) => ({
      variant: 'determinate',
      color: 'rgba(173, 0, 255, 1)',
      trackColor: theme.colors.white_17,
      style: {
        borderRadius: 4,
        minWidth: 200,
      },
    }),
    Input: (props, theme) => ({
      inputContainerStyle: {
        backgroundColor: theme.colors.white,
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 8,
        marginBottom: 8,
        borderBottomWidth: 0,
      },
      inputStyle: {
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20.83,
        color: theme.colors.gray,
        opacity: 0.29,
      },
      labelStyle: {
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18.23,
        color: theme.colors.white,
      },
    }),
    Text: (props, theme) => ({
      h1Style: {
        fontFamily: 'DMSans-Bold',
        fontWeight: 'normal',
        fontSize: 26,
        // lineHeight: 24,
        textAlign: 'center',
        padding: 0,
        color: theme.colors.purpleOptional,
      },
      h2Style: {
        fontFamily: 'DMSans-Bold',
        fontWeight: 'normal',
        lineHeight: 24,
        fontSize: 16,
        color: theme.colors.white,
        textAlign: 'center',
      },
      h3Style: {
        fontFamily: 'DMSans-Bold',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 26.04,
        color: theme.colors.primary,
        textAlign: 'center',
      },
      h4Style: {
        fontFamily: 'DMSans-Bold',
        fontWeight: 'normal',
        fontSize: 22,
        lineHeight: 28.64,
        color: theme.colors.white,
        textAlign: 'center',
      },
      style: props.t1
        ? {
            fontFamily: 'DMSans-Bold',
            fontWeight: 'normal',
            fontSize: 26,
            lineHeight: 33.85,
            color: theme.colors.white,
          }
        : props.t2
        ? {
            fontFamily: 'DMSans-Regular',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 20.83,
            color: theme.colors.white_80,
          }
        : props.t3
        ? {
            fontFamily: 'DMSans-Medium',
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 18,
            color: theme.colors.white_45,
            textAlign: 'center',
          }
        : props.t4
        ? {
            fontFamily: 'DMSans-Regular',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 19,
            color: theme.colors.gray,
          }
        : props.t5
        ? {
            fontFamily: 'DMSans-Regular',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 18.23,
            color: theme.colors.white,
          }
        : props.t6
        ? {
            fontFamily: 'DMSans-Regular',
            fontWeight: '400',
            fontSize: 15,
            lineHeight: 19.53,
            color: theme.colors.gray,
          }
        : props.t7
        ? {
            fontFamily: 'DMSans-Regular',
            fontWeight: '400',
            fontSize: 10,
            lineHeight: 15,
            color: theme.colors.white_45,
          }
        : props.t8
        ? {
            fontFamily: 'DMSans-Bold',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 21,
            color: theme.colors.secondary,
          }
        : props.h5
        ? {
            fontFamily: 'DMSans-Medium',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 20.83,
            color: theme.colors.white,
          }
        : props.h6
        ? {
            fontFamily: 'DMSans-Bold',
            fontWeight: 'normal',
            fontSize: 24,
            lineHeight: 32,
            textAlign: 'center',
            padding: 0,
            color: theme.colors.purpleOptional,
          }
        : props.h7
        ? {
            fontFamily: 'DMSans-Medium',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 20,
            color: theme.colors.white,
            textAlign: 'center',
          }
        : {
            fontFamily: 'DMSans-Bold',
            fontWeight: 'normal',
            fontSize: 22,
            lineHeight: 28.64,
          },
    }),
  },
  mode: 'dark',
});
