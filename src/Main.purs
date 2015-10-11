module Main where

import Prelude
import Control.Monad.Eff.Console

main = log "Hello Electron!"

add3 :: Int -> Int
add3 x = x + 3
