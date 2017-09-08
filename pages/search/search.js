Page({
    data: {
        inputShowed: false,
        inputVal: "",
        matchedResult: {"509": 'info',
                        "139": 'info',
                        "203": 'info',
                        "63": 'info'
        }
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
        //console.log("good to go")
    },
    gene2PanelMatch: function () {
      var inputGene = this.data.inputVal;
      console.log(inputGene)
      var panelData = new Array();
      panelData["509"] = ["ABL1","ACVR1","ACVR1B","ACVR2A","AJUBA","AKT1","AKT2","AKT3","ALK","ALOX12B","ANGPT1","ANGPT2","APC","APCDD1","AR","ARAF","ARFRP1","ARID1A","ARID1B","ARID2","ARID5B","ASXL1","ATM","ATR","ATRX","AURKA","AURKB","AXIN1","AXIN2","AXL","B2M","B4GALT3","BACH1","BAK1","BAP1","BARD1","BCL2","BCL2A1","BCL2L1","BCL2L11","BCL2L2","BCL6","BCOR","BCORL1","BCR","BLM","BMPR1A","BRAF","BRCA1","BRCA2","BRIP1","BTG1","BTK","BUB1B","C11ORF30","C1QA","C1R","C1S","CALR","CARD11","CASP8","CBFB","CBL","CBR1","CCND1","CCND2","CCND3","CCNE1","CD79A","CD79B","CDC25C","CDC42","CDC73","CDH1","CDK12","CDK2","CDK4","CDK6","CDK8","CDKN1A","CDKN1B","CDKN2A","CDKN2B","CDKN2C","CDX2","CEBPA","CFLAR","CHD4","CHEK1","CHEK2","CHUK","CIC","CRBN","CREBBP","CRIPAK","CRKL","CRLF2","CROT","CSF1R","CTCF","CTLA4","CTNNA1","CTNNB1","CUL4A","CUL4B","CYLD","CYP17A1","DAXX","DDB2","DDR1","DDR2","DICER1","DIS3","DNAJB1","DNMT1","DNMT3A","DOT1L","DUSP6","EDNRA","EGFR","EGR3","EIF4A2","ELAC2","ELF3","EML4","EP300","EPCAM","EPHA2","EPHA3","EPHA5","EPHB1","EPHB2","EPHB6","ERBB2","ERBB3","ERBB4","ERCC1","ERCC2","ERCC3","ERCC4","ERCC5","ERG","ESR1","ETV1","ETV4","ETV5","ETV6","EWSR1","EXT1","EXT2","EZH2","FAM123B","FAM46C","FANCA","FANCB","FANCC","FANCD2","FANCE","FANCF","FANCG","FANCI","FANCL","FANCM","FAT3","FBXW7","FCGR1A","FCGR2A","FCGR2B","FCGR2C","FCGR3A","FCGR3B","FGF10","FGF12","FGF14","FGF19","FGF23","FGF3","FGF4","FGF6","FGF7","FGFR1","FGFR2","FGFR3","FGFR4","FH","FLCN","FLT1","FLT3","FLT4","FNTA","FOXA1","FOXA2","FOXL2","FPGS","FUBP1","FYN","GAB2","GATA1","GATA2","GATA3","GID4","GNA11","GNA13","GNAQ","GNAS","GNRHR","GPC3","GPR124","GRIN2A","GRM3","GSK3B","H3F3A","H3F3B","H3F3C","HCK","HDAC1","HDAC2","HDAC3","HDAC4","HDAC8","HGF","HIF1A","HIST1H1C","HIST1H2BD","HIST1H3B","HNF1A","HRAS","HRH2","HSD17B3","HSD3B2","HSP90AA1","HSPA4","IDH1","IDH2","IFNAR1","IFNAR2","IGF1","IGF1R","IGF2","IGF2R","IKBKB","IKBKE","IKZF1","IL7R","INHBA","IRF4","IRS2","ITGB2","JAK1","JAK2","JAK3","JUN","KAT6A","KDM5A","KDM5C","KDM6A","KDR","KEAP1","KIF1B","KIT","KLF4","KLHL6","KMT2A","KMT2B","KMT2C","KMT2D","KRAS","LCK","LIMK1","LMO1","LRP1B","LYN","MAML1","MAP2K1","MAP2K2","MAP2K4","MAP3K1","MAP3K13","MAPK1","MAPK3","MAPK8","MAPK8IP1","MAX","MC1R","MCL1","MDM2","MDM4","MECOM","MED12","MEF2B","MEN1","MET","MITF","MLH1","MPL","MRE11A","MS4A1","MSH2","MSH3","MSH4","MSH5","MSH6","MSR1","MTOR","MUC1","MUTYH","MYC","MYCL1","MYCN","MYD88","NBN","NCOA3","NCOR1","NEK11","NF1","NF2","NFE2L2","NFE2L3","NFKBIA","NKX2-1","NKX3-1","NOTCH1","NOTCH2","NOTCH3","NOTCH4","NPM1","NR3C1","NRAS","NSD1","NTRK1","NTRK2","NTRK3","NUP93","PAK3","PAK7","PALB2","PARP1","PARP2","PARP3","PARP4","PAX5","PBRM1","PCBP1","PDGFRA","PDGFRB","PDK1","PHF6","PHOX2B","PIGF","PIK3C2G","PIK3C3","PIK3CA","PIK3CB","PIK3CG","PIK3R1","PIK3R2","PLK1","PMS1","PMS2","PNRC1","POLD1","POLE","POLH","POT1","PPP2R1A","PRDM1","PRKAA1","PRKACA","PRKAR1A","PRKCA","PRKCB","PRKCG","PRKDC","PRSS1","PRSS8","PSMB1","PSMB2","PSMB5","PTCH1","PTEN","PTP4A3","PTPN11","PTPRD","RAC1","RAC2","RAD21","RAD50","RAD51","RAD51B","RAD51C","RAD51D","RAD52","RAD54L","RAF1","RARA","RARB","RARG","RB1","RECQL4","REL","RET","RHEB","RICTOR","RNASEL","RNF43","ROS1","RPA1","RPL22","RPL5","RPS14","RPS6KB1","RPTOR","RUNX1","RUNX1T1","RXRA","RXRB","RXRG","SBDS","SDHAF2","SDHB","SDHC","SDHD","SEMA3A","SEMA3E","SETBP1","SETD2","SF1","SF3B1","SH2B3","SLAMF7","SLC4A1","SMAD2","SMAD3","SMAD4","SMARCA4","SMARCB1","SMARCD1","SMC1A","SMC3","SMO","SOCS1","SOX10","SOX17","SOX2","SOX9","SPEN","SPOP","SPRY4","SRC","SRD5A2","SRSF2","SSTR2","STAG2","STAT4","STAT5B","STK11","SUFU","SUZ12","SYK","TACC3","TBL1XR1","TBX3","TEK","TERT","TET2","TFG","TGFBR2","TIPARP","TLR4","TMEM127","TMPRSS2","TNFAIP3","TNFRSF14","TNFRSF8","TNFSF11","TNFSF13B","TOP1","TOP2A","TP53","TRAF7","TSC1","TSC2","TSHR","TSHZ2","TUBA1A","TUBB","TUBD1","TUBE1","TUBG1","TYR","U2AF1","VEGFA","VEGFB","VEZF1","VHL","WAS","WISP3","WRN","WT1","XIAP","XPA","XPC","XPO1","XRCC1","XRCC3","YES1","ZNF217","ZNF703","ZRSR2"]
        panelData["203"] = ["ABL1","ACVR1","AKT1","AKT2","ALK","APC","AR","ARID1A","ARID1B","ASXL1","ATM","ATRX","AURKA","AXIN2","BAP1","BCL2","BCR","BLM","BMPR1A","BRAF","BRCA1","BRCA2","BRIP1","BTK","BUB1B","CALR","CBL","CCND1","CCNE1","CDC73","CDH1","CDK4","CDK6","CDKN1B","CDKN2A","CDKN2B","CDKN2C","CEBPA","CHEK2","CIC","CREBBP","CSF1R","CTNNB1","CYLD","DAXX","DDB2","DDR2","DICER1","DNAJB1","DNMT3A","EGFR","EP300","ERBB2","ERBB3","ERBB4","ERCC1","ERCC2","ERCC3","ERCC4","ERCC5","ESR1","ETV1","ETV4","ETV5","ETV6","EWSR1","EXT1","EXT2","EZH2","FANCA","FANCB","FANCC","FANCD2","FANCE","FANCF","FANCG","FANCI","FANCL","FANCM","FBXW7","FGFR1","FGFR2","FGFR3","FGFR4","FH","FLCN","FLT3","FLT4","FOXL2","GATA1","GATA2","GNA11","GNAQ","GNAS","GPC3","H3F3A","H3F3B","HNF1A","HRAS","IDH1","IDH2","IGF1R","IGF2R","IKZF1","JAK1","JAK2","JAK3","KDR","KIT","KMT2A","KRAS","MAML1","MAP2K1","MAP2K4","MDM2","MDM4","MED12","MEN1","MET","MLH1","MPL","MSH2","MSH6","MTOR","MUTYH","MYC","MYCL1","MYCN","MYD88","NBN","NCOA3","NF1","NF2","NKX2-1","NOTCH1","NOTCH2","NOTCH3","NOTCH4","NPM1","NRAS","NTRK1","PALB2","PAX5","PBRM1","PDGFRA","PDGFRB","PHOX2B","PIK3CA","PIK3R1","PMS1","PMS2","POLD1","POLE","POLH","POT1","PRKACA","PRKAR1A","PRSS1","PTCH1","PTEN","PTPN11","RAD51C","RAF1","RARA","RB1","RECQL4","RET","RNF43","ROS1","RUNX1","SBDS","SDHAF2","SDHB","SDHC","SDHD","SF3B1","SMAD2","SMAD3","SMAD4","SMARCB1","SMO","SRC","STAG2","STK11","SUFU","TACC3","TERT","TET2","TGFBR2","TMPRSS2","TNFAIP3","TOP1","TP53","TSC1","TSC2","TSHR","VHL","WAS","WRN","WT1","XPA","XPC","XRCC1"]
        panelData["139"] = ["AIP", "ALK", "APC", "ATM", "ATR", "AXIN2", "BAP1", "BARD1", "BLM", "BMPR1A", "BRCA1", "BRCA2", "BRIP1", "BUB1B", "CBL", "CDC73", "CDH1", "CDK4", "CDKN1B", "CDKN1C", "CDKN2A", "CEBPA", "CHEK1", "CHEK2", "CYLD", "DDB2", "DICER1", "DIS3L2", "EGFR", "ELANE", "EPCAM", "ERCC1", "ERCC2", "ERCC3", "ERCC4", "ERCC5", "EXT1", "EXT2", "EZH2", "FANCA", "FANCB", "FANCC", "FANCD2", "FANCE", "FANCF", "FANCG", "FANCI", "FANCL", "FANCM", "FAS", "FH", "FLCN", "GALNT12", "GATA2", "GEN1", "GJB2", "GPC3", "GREM1", "HMBS", "HNF1A", "HOXB13", "HRAS", "KIT", "LASP1", "MAX", "MC1R", "MEN1", "MET", "MITF", "MLH1", "MLH3", "MRE11A", "MSH2", "MSH6", "MTAP", "MTUS1", "MUTYH", "NBN", "NF1", "NF2", "NSD1", "NTRK1", "PALB2", "PALLD", "PDGFRA", "PHOX2B", "PMS1", "PMS2", "POLD1", "POLE", "POLH", "PPM1D", "PRKAR1A", "PRSS1", "PTCH1", "PTCH2", "PTEN", "PTPN11", "RAD50", "RAD51B", "RAD51C", "RAD51D", "RB1", "RECQL", "RECQL4", "RET", "RHBDF2", "RUNX1", "SBDS", "SDHA", "SDHAF2", "SDHB", "SDHC", "SDHD", "SLX4", "SMAD4", "SMARCA4", "SMARCB1", "SMARCE1", "SOS1", "STAT3", "STK11", "SUFU", "TERT", "TGFBR1", "TMEM127", "TP53", "TSC1", "TSC2", "UROD", "USHBP1", "VEGFA", "VHL", "WRN", "WT1", "XPA", "XPC", "XRCC2", "ZMAT3"]
      panelData["63"] = ["ABL1", "AKT1", "ALK", "APC", "AR", "ATM", "BCR", "BRAF", "CDH1", "CDK4", "CDK6", "CDKN2A", "CSF1R", "CTNNB1", "DNMT3A", "EGFR", "ERBB2", "ERBB4", "ESR1", "EZH2", "FBXW7", "FGFR1", "FGFR2", "FGFR3", "FLT3", "GNA11", "GNAQ", "GNAS", "HNF1A", "HRAS", "IDH1", "IDH2", "JAK2", "JAK3", "KDR", "KIT", "KRAS", "MAP2K1", "MET", "MLH1", "MPL", "MYC", "NPM1", "NRAS", "NTRK1", "PDGFRA", "PDGFRB", "PIK3CA", "PIK3R1", "PTEN", "PTPN11", "RARA", "RB1", "RET", "ROS1", "SMAD4", "SMARCB1", "SMO", "SRC", "STK11", "TERT", "TP53", "VHL"]
      console.log(panelData)
      var gene2PanelResult = new Array();
      gene2PanelResult["509"] = 'cancel'
      gene2PanelResult["203"] = 'cancel'
      gene2PanelResult["139"] = 'cancel'
      gene2PanelResult["63"] = 'cancel'
      for (var panel in panelData) {
        for (var gene in panelData[panel]) {
          //console.log(gene)
          if (inputGene == panelData[panel][gene]) {
            //console.log(panel, gene, panelData[panel][gene])
            gene2PanelResult[panel] = 'success_no_circle';
            //console.log(gene2PanelResult[panel])
            break;
          }
        }
      //console.log(this.data.matchedResult)
      this.setData({
        matchedResult: gene2PanelResult
      });
      //console.log(this.data.matchedResult)
      }
    }
});