import ceacImg from "./ceac.png"
import cnpjImg from "./cnpj.png"
import drtImg from "./drt.png"
import certificadoImg from "./com certificado.png"
import cursoImg from "./curso.png"
import figurinoImg from "./figurino.png"
import idiomasImg from "./idiomas.png"
import liveImg from "./live.png"
import maquiagemImg from "./maquiagem e visagismo.png"
//import backstageImg from "./backstage.png"
import montagemImg from "./montagem e exposições.png"
import newTechImg from "./novas tecnologias.png"
import nrsImg from "./nrs.png"
import operacionalImg from "./produção operacional.png"
import rodaConversaImg from "./roda de conversa.png"
import serviçosImg from "./serviços gerais.png"
import assistivasImg from "./tecnologias assistivas.png"

// lista de icones válidos
export const IconNames = [
  "ceac",
  "cnpj",
  "drt",
  "certificado",
  "curso",
  "figurino",
  "idiomas",
  "live",
  "maquiagem",
  //"backstage",
  "montagem",
  "newTech",
  "nrs",
  "operacional",
  "rodaConversa",
  "serviços",
  "assistivas",
] as const
export type IconName = typeof IconNames[number]

export const iconDict: { [i in IconName]: string } = {
  "ceac":         ceacImg,
  "cnpj":         cnpjImg,
  "drt":          drtImg,
  "certificado":  certificadoImg,
  "curso":        cursoImg,
  "figurino":     figurinoImg,
  "idiomas":      idiomasImg,
  "live":         liveImg,
  "maquiagem":    maquiagemImg,
  //"backstage":    backstageImg,
  "montagem":     montagemImg,
  "newTech":      newTechImg,
  "nrs":          nrsImg,
  "operacional":  operacionalImg,
  "rodaConversa": rodaConversaImg,
  "serviços":     serviçosImg,
  "assistivas":   assistivasImg,
}

const isIconName = (label: string): label is IconName => IconNames.includes(label as IconName)

// get icon
export const getIcon = (label: string) => isIconName(label)
  ? iconDict[label]
  : undefined
