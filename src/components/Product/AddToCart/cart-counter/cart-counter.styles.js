const { createStyles } = require("@mantine/styles");

export const useStyles = createStyles((theme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `3px ${theme.spacing.xs}px`,
      borderRadius: theme.radius.lg,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : '#40c057',
  
      '&:focus-within': {
        borderColor: theme.colors[theme.primaryColor][6],
      },
    },
  
    control: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'transparent',
      // border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
      color: theme.white,
  
      '&:disabled': {
        borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
        opacity: 0.8,
        backgroundColor: 'transparent',
      },
    },
  
    input: {
      textAlign: 'center',
      color: theme.white,
      fontWeight: 800,
      paddingRight: `${theme.spacing.sm}px !important`,
      paddingLeft: `${theme.spacing.sm}px !important`,
      height: 28,
      flex: 1,
    },
  }));