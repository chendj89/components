import type { DefineComponent, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    msg: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: {
        msg?: string | undefined;
    };
    msg: Ref<string | undefined>;
    updateMsg: (msg: string) => void;
    menu: any;
    list: any[];
    rightMenu: (item: any) => void;
    backMenu: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    msg: {
        type: StringConstructor;
        required: false;
    };
}>>, {}>;
export default _sfc_main;
