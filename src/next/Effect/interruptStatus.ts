import { InterruptStatus } from "../Fiber/core"

import { Effect } from "./effect"
import { IInterruptStatus } from "./primitives"

/**
 * Switches the interrupt status for this effect. If `true` is used, then the
 * effect becomes interruptible (the default), while if `false` is used, then
 * the effect becomes uninterruptible. These changes are compositional, so
 * they only affect regions of the effect.
 */
export const interruptStatus = (flag: InterruptStatus) => <S, R, E, A>(
  effect: Effect<S, R, E, A>
): Effect<S, R, E, A> => new IInterruptStatus(effect, flag)
