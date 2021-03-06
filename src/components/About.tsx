import { Box, Text, Flex, Stack, useColorMode } from '@chakra-ui/core'
import { Image, useWindowSize, Prop, Layout, emToPx } from '../helper'
import { Icon as Iconify } from '@iconify/react'
import { useEffect, useState } from 'react'
import { IconMap } from '../config/icons'
import { config } from '../config/config'
import settings from '../config/about'

const Description = () => (
  <>
    Hey, I am Touch Sungkawichai <br />
    I am a student filled with passion about computation, philosophy, and mathematics. <br />
  </>
)

const Icon = (props: Prop) => {
  const { colorMode } = useColorMode()
  const [defcol, setDefcol] = useState('')
  const [focus, setFocus] = useState('')
  const [color, setColor] = useState('')
  useEffect(() => {
    setDefcol(settings.social.color.def[colorMode])
    setFocus(settings.social.color.focus[colorMode])
    setColor(settings.social.color.def[colorMode])
  }, [colorMode])
  return (
    <a
      onMouseEnter={() => setColor(focus)}
      onMouseLeave={() => setColor(defcol)}
      href={props.href}
      key={props.key}
    >
      <Iconify
        color={color}
        style={{ 'max-width': '20px' }}
        width="100%"
        icon={props.icon}
      />
    </a>
  )
}

const Social = () => {
  const window = useWindowSize()
  const [inline, setInline] = useState(true)
  useEffect(() => {
    setInline(window.width > emToPx(config.breakpoint['sm']) ? false : true)
  }, [window])

  return (
    <Stack width="100%" isInline={inline} justify="space-around">
      {settings.social.icons.map((val, key) => (
        <Icon key={key} href={val.href} icon={IconMap[val.icon]} />
      ))}
    </Stack>
  )
}

export default () => {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState('')
  const [pic, setPic] = useState('')
  useEffect(() => {
    setBg(settings.bg[colorMode])
    setPic(settings.pic[colorMode])
  }, [colorMode])
  return (
    <Layout bg={bg} title="About me">
      <Box width={{base:'100%', sm:'61%'}} p={2}>
        <Text fontSize={{base:'sm', sm:'md', md:'xl', lg:'2xl'}}>
          <Description />
        </Text>
      </Box>
      <Flex width={{base:'100%', sm:'5%'}} justify="flex-end" p={1}>
        <Social />
      </Flex>
      <Box width={{base:'100%', sm:'34%'}}>
        <Image maxH="100%" maxW="100%" src={pic} />
      </Box>
    </Layout>
  )
}
