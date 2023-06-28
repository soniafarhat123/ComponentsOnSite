import React from 'react';
import { Button, MyButton } from '../../../lib/ionic-adapter-compo/BaseButton';

export const TypeColor = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    success: 'sucess',
    warning: 'warning',
    danger: 'danger',
    light: 'light',
    medium: 'medium',
    dark: 'dark',
};
export enum IconPosition {
    start = 'start',
    end = 'end',
    only = 'icon-only',
}

export enum ButtonFill {
    clear = 'clear',
    default = 'default',
    outline = 'outline',
    solid = 'solid',
}
export type _MyIcon = {
    myIcon: JSX.Element;
    position: IconPosition;
};
export type IconDisabled = true | false;
interface ButtonProps extends MyButton {
    color?: (typeof TypeColor)[keyof typeof TypeColor];
    icon?: _MyIcon;
    label?: string;
    disabled?: IconDisabled;
    fill?: ButtonFill;
    href?: string;
    actions?: { icon: JSX.Element; call: () => void }[];
    style?: Record<string, string>;
}

const SimpleButton: React.FC<ButtonProps> = ({
    color,
    icon,
    label,
    actions,
    className,
    fill,
    href,
    disabled,
    style,
    ...props
}) => {
    console.log(actions);
    return (
        <Button
            {...props}
            style={{ ...style }}
            color={color}
            expand="block"
            fill={fill}
            href={href && href.length > 0 ? href : ''}
            disabled={disabled}
            className={className && className.length > 0 ? className : ''}
        >
            {icon && icon.position === IconPosition.start && icon.myIcon}
            {label && label.length > 0 ? label : null}
            {icon && icon.position === IconPosition.end && icon.myIcon}
            {icon && icon.position === IconPosition.only && icon.myIcon}
        </Button>
    );
};

export default SimpleButton;
