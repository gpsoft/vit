(ns vit.sample
  (:require [bidi.bidi :as bb]
            [bidi.schema :as bs]
            [ring.mock.request :as mock]))

(comment
  (bb/path-for
    ["/" {["foo/" [keyword :db/ident] "/bar"] :index}]
    :index :db/ident :hoge/Hog)
  )
