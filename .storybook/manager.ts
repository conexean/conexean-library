import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';


addons.setConfig({
    theme: create({
        base: "light",

        brandTitle: "Conexean design system",
        brandUrl: "https://conexean.com.br",
        brandImage: "https://conexean-visual-identity.s3.amazonaws.com/logomarca.png",
        brandTarget: "_self",

        // colorPrimary: "#e16a3d",
        // colorSecondary: "",
        // appBg: "#016a6d",
        // appBorderColor: "",
        // appBorderRadius: 20,
        // textColor: "",
        // barBg: "#e16a3d",
        // barTextColor: "",
        // appContentBg: "#f3f4f6"

    }),
});