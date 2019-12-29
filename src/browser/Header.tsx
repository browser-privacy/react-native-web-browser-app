import * as React from "react";
import { URLBarView } from "./URLBarView";
import { TopTabsViewController } from "./TopTabsViewController";
import { ViewProps, View, StyleSheet, Animated } from "react-native";

class TopTabsContainer extends React.Component<{}, {}>{

    render(){
        return (
            <View style={{ flexDirection: 'column' }}>
                <TopTabsViewController/>
            </View>
        );
    }
}

interface Props {
    animatedNavBarTranslateY: Animated.AnimatedInterpolation,
    slotBackgroundColor?: string,
    textFieldBackgroundColor?: string,
    buttonBackgroundColor?: string,
    inOverlayMode: boolean,
    toolbarIsShowing: boolean,
}

interface State {

}

// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L105
// Header used to have a subchild, "UrlBarTopTabsContainer", but that has now been flattened.
export class Header extends React.Component<Props & ViewProps, State>{

    render(){
        const {
            slotBackgroundColor,
            textFieldBackgroundColor,
            buttonBackgroundColor,
            toolbarIsShowing,
            inOverlayMode,
            style,
            children,
            ...rest
        } = this.props;
        return (
            <Animated.View
                style={StyleSheet.compose(
                    {
                        flexDirection: 'column',
                        
                        justifyContent: "flex-start",
                        marginHorizontal: 4,
                        // flex: 1,
                        // backgroundColor: "orange",
                    },
                    style
                )}
                {...rest}
            >
                {/* urlBar */}
                <URLBarView
                    animatedNavBarTranslateY={this.props.animatedNavBarTranslateY}
                    inOverlayMode={inOverlayMode}
                    toolbarIsShowing={toolbarIsShowing}
                    slotBackgroundColor={slotBackgroundColor}
                    textFieldBackgroundColor={textFieldBackgroundColor}
                    buttonBackgroundColor={buttonBackgroundColor}
                />
                {/* topTabsContainer */}
                <TopTabsContainer/>
            </Animated.View>
        );
    }
}