input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.showString("STOPP")
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Surprised)
})
basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Surprised)
basic.showIcon(IconNames.Sad)
