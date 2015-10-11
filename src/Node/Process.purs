module Node.Process where

import Prelude
import Control.Monad.Eff
import Psc.Ide.Command
import Data.Maybe
import Data.Either
import Data.Argonaut.Encode (EncodeJson, encodeJson)

foreign import data PROCESS :: !

foreign import exec :: forall eff.
  String -> String -> Eff (process :: PROCESS | eff) String

pscIde q = exec "psc-ide" q

cwd :: forall eff. Eff( process :: PROCESS | eff) (Result Message)
cwd = unwrapResponse <$> (pscIde (show (encodeJson Cwd)))

cwdJS :: forall eff. String -> Eff (process :: PROCESS | eff) String
cwdJS def = do
  res <- cwd
  case res of
    Left _ -> return def
    Right (Message path) -> return path

list :: forall eff. Eff( process :: PROCESS | eff) (Result Modules)
list = unwrapResponse <$> pscIde (show (encodeJson Ls))

load :: forall eff.
  Array String ->
  Array String ->
  Eff( process :: PROCESS | eff) (Result Message)
load ms ds = unwrapResponse <$> pscIde (show (encodeJson (Load ms ds)))

quit :: forall eff. Eff( process :: PROCESS | eff) (Result Message)
quit = unwrapResponse <$> pscIde (show (encodeJson Quit))

pursuitCompletion :: forall eff. String -> Eff( process :: PROCESS | eff) (Result (Array PursuitCompletion))
pursuitCompletion q = unwrapResponse <$> pscIde (show (encodeJson (Pursuit Ident q)))

complete :: forall eff.
  Array Filter ->
  Maybe Matcher ->
  Eff ( process :: PROCESS | eff) (Result (Array Completion))
complete fs m = unwrapResponse <$> pscIde (show (encodeJson (Complete fs m)))
