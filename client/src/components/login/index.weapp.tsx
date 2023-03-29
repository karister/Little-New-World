import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Index extends Component<PropsWithChildren> {
  state = {
    context: {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "getId",
        data: {}
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getLogin}>登录云函数</Button>
        <Text>
          {JSON.stringify(this.state.context)}
        </Text>
      </View>
    )
  }
}
