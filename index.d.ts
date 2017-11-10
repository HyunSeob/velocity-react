// Type definitions for velocity-react v1.3.3
// Project: https://github.com/google-fabric/velocity-react
// Definitions by: HyunSeob <https://github.com/hyunseob>

/// <reference types="velocity-animate" />
import * as React from 'react'

declare module 'velocity-react' {
  export interface VelocityComponentProps extends jquery.velocity.Options {
    animation: jquery.velocity.Properties | string
    runOnMount?: boolean
    targetQuerySelector?: string
    interruptBehavior?: string
  }

  export class VelocityComponent extends React.Component<VelocityComponentProps> {
    runAnimation(config: { stop?: boolean; finish?: boolean }): void
  }

  export interface VelocityAnimationObject {
    animation: jquery.velocity.Properties | string
    styles?: jquery.velocity.Properties
    opts?: jquery.velocity.Options
  }

  export interface VelocityTransitionGroup {
    enter?: VelocityAnimationObject | string
    leave?: VelocityAnimationObject | string
    component?: string
    runOnMount?: boolean
    enterHideStyle?: jquery.velocity.Options
    enterShowStyle?: jquery.velocity.Options
  }

  export class VelocityTransitionGroup extends React.Component<VelocityTransitionGroup> {}

  export function registerEffect(animation: jquery.velocity.RegisteredEffectOptions): string

  export function registerEffect(
    suffix: string,
    animation: jquery.velocity.RegisteredEffectOptions,
  ): string
}
