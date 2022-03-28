import {
    ImageBackgroundBase,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View
} from 'react-native'
import React from 'react'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.hiText}>Xin Chào</Text>
                <Text style={styles.userText}>LÊ ANH TUẤN</Text>
                <Text style={styles.userText}>0363520471</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.inputPassword} />

                <TouchableOpacity>
                    <Text style={styles.buttonLogin}>Đăng NHÂP</Text>
                </TouchableOpacity>
            </View>
            <View></View>

            <View style={styles.action}>
                <TouchableOpacity>
                    <Text style={styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.buttonActionText}>THOÁT ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const TEXT = {
    color: '#fff',
    textAlign: 'center'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b0006d'
    },
    hiText: {
        ...TEXT,
        marginTop: 100,
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold'
    },
    userText: {
        ...TEXT,
        fontSize: 16,
        lineHeight: 30
    },
    inputPassword: {
        height: 60,
        width: 400,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 100
    },
    buttonLogin: {
        width: 300,
        backgroundColor: '#C71585',
        height: 50,
        color: '#fff',
        marginTop: 15,
        borderRadius: 5,
        marginLeft: 150
    },
    buttonActionText: {
        ...TEXT
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
