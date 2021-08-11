import React, { DOMAttributes } from 'react';
import './CIcon.css';
export interface CIconProps extends DOMAttributes<SVGSVGElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Name of the icon placed in React object. [docs]
     */
    name?: string;
    /**
     * Icon SVG content. [docs]
     */
    content?: string | Array<string>;
    /**
     * Size of the icon. Available sizes: 'sm', 'lg', 'xl', 'xxl', '3xl...9xl', 'custom', 'custom-size'. [docs]
     */
    size?: 'custom-size' | 'sm' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    /**
     * Use for replacing default CIcon component classes. Prop is overriding the 'size' prop. [docs]
     */
    customClassName?: string | object | Array<string>;
    /**
     * If defined component will be rendered using 'use' tag. [docs]
     */
    use?: string;
    /**
     * Title tag content. [docs]
     */
    title?: string;
}
export declare const CIcon: React.ForwardRefExoticComponent<CIconProps & React.RefAttributes<SVGSVGElement>>;
