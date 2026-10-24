import React from 'react';
import {Button as AntButton, ConfigProvider, Space} from 'antd';
import {createStyles} from 'antd-style';
import {TButton} from "@/types";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

const useStyle = createStyles(({cssVar, prefixCls, css}) => ({
    linearGradientButton: css`
        &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
            > span {
                position: relative;
            }

            &::before {
                content: '';
                background: linear-gradient(135deg, #6253e1, #04befe);
                position: absolute;
                inset: -1px;
                opacity: 1;
                transition: all ${cssVar.motionDurationSlow};
                border-radius: inherit;
            }

            &:hover::before {
                opacity: 0;
            }
        }
    `,
}));

export default function Button({text, link, isActive}: TButton) {
    const {styles} = useStyle();
    const theme = useAppSelector((state: RootState) => state.theme.theme);

    return (
        <ConfigProvider
            button={{
                className: styles.linearGradientButton,
            }}
        >
            <AntButton
                type={theme === 'light' ? "primary" : "default"}
                href={link}
                color={isActive ? "cyan" : "default" }
                size="large">
                {text}
            </AntButton>
        </ConfigProvider>
    );
};
