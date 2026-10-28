import React from 'react';
import {Button as AntButton, ConfigProvider} from 'antd';
import {createStyles} from 'antd-style';
import {useRouter} from "next/router";
import {TButton} from "@/types";

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
    const router = useRouter();

    // Navigate client-side, but let modified clicks (new tab/window) behave like a normal link
    function handleClick(e: React.MouseEvent<HTMLElement>) {
        if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        router.push(link);
    }

    return (
        <ConfigProvider
            button={{
                className: styles.linearGradientButton,
            }}
        >
            <AntButton
                type={isActive ? "primary" : "default"}
                href={link}
                onClick={handleClick}
                aria-current={isActive ? "page" : undefined}
                size="large">
                {text}
            </AntButton>
        </ConfigProvider>
    );
};
