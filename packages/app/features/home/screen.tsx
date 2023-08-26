import {
  Adapt,
  Anchor,
  Button,
  H1,
  Paragraph,
  Popover,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, Menu } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })
  const [open, setOpen] = useState(false)

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
      <Popover open={open} onOpenChange={setOpen} size="$5" stayInFrame={{ padding: 20 }}>
        <Popover.Trigger asChild>
          <Button
            chromeless
            p="$2"
            onPress={() => setOpen(!open)}
            theme={open ? 'alt1' : ''}
            icon={<Menu size={32} />}
          />
        </Popover.Trigger>

        <Adapt platform="web" when="sm">
          <Popover.Sheet zIndex={100000000} modal dismissOnSnapToBottom>
            <Popover.Sheet.Frame>
              <Popover.Sheet.ScrollView>
                <Adapt.Contents />
              </Popover.Sheet.ScrollView>
            </Popover.Sheet.Frame>
            <Popover.Sheet.Overlay zIndex={100} />
          </Popover.Sheet>
        </Adapt>

        <Popover.Content
          bw={1}
          boc="$borderColor"
          enterStyle={{ x: 0, y: -10, o: 0 }}
          exitStyle={{ x: 0, y: -10, o: 0 }}
          x={0}
          y={0}
          o={1}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          p={0}
          maxHeight="80vh"
          elevate
          zIndex={100000000}
        >
          <Popover.Arrow borderWidth={1} boc="$borderColor" />

          <Popover.ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <YStack
              miw={230}
              p="$3"
              ai="flex-end"
              // display={open ? 'flex' : 'none'}
            >
              <Paragraph>Nothing to see here</Paragraph>
            </YStack>
          </Popover.ScrollView>
        </Popover.Content>
      </Popover>
      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
function useNextRouter() {
  throw new Error('Function not implemented.')
}

function useEffect(arg0: () => () => void, arg1: any[]) {
  throw new Error('Function not implemented.')
}
