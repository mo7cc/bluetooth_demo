//height传入单位为cm weight单位为kg sex=1为男性 else 为女性
module.exports = {
    getWeightDisplay,
    getBMIDisplay,
    getFatRateDisplay,
    getMuscleDisplay,
    getMoistureDisplay,
    getBonemassDisplay,
    getBMRDisplay,
    getVisceralfatDisplay,
    getSubcutaneousFatDisplay,
    getProteinRateDisplay,
    getPhysicalAgeDisplay,
    getFatWeightDisplay,
    getMuscleMassDisplay,
    getProteinDisplay,
    getFatLevel,
    getBodyLevel,
    getWeightScore,
};
// 体重 标准判断
function getWeightDisplay(height, weight) {
    var i = Math.pow(height / 100, 2);
    var a1 = 18.5 * i;
    var a2 = 25 * i;
    var a3 = 30 * i;
    var string1 = a1.toFixed(1);
    var string2 = a2.toFixed(1);
    var string3 = a3.toFixed(1);
    if (weight == "-.-") {
        return {
            standard: "-.-",
            text: "",
        };
    } else if (weight < string1) {
        return {
            standard: "偏瘦",
            text: `基于目前的身体状况，您的标准体重范围为${string1}~${string2}kg，保持理想体重有助于身体各机能持续健康运转，维持最佳代谢状态。体重偏瘦或许已经危害到你的健康，建议您保持良好睡眠，适当食用含高卡路里食物，保持良好的饮食习惯。`,
        };
    } else if (weight >= string1 && weight < string2) {
        return {
            standard: "标准",
            text: `当前体重为${weight}kg，处于标准体重范围，状态良好，保持良好的饮食习惯和适当的运动，追求完美身材吧。`,
        };
    } else if (weight >= string2 && weight < string3) {
        return {
            standard: "偏胖",
            text: `当前体重为${weight}kg，体重处于不健康区间！请减少高油高热量食物摄入，加强身体锻炼，努力恢复健康体重和好身材。`,
        };
    } else if (weight >= string3) {
        return {
            standard: "肥胖",
            text: `当前体重为${weight}kg，远高于标准体重，过度肥胖不仅形体臃肿，更是各种慢性疾病的主要导火线，请减少高脂肪、高热量食物的摄入，制定健身计划，加强锻炼，努力恢复健康体重和好身材。`,
        };
    }
    return {};
}
//BMI标准
function getBMIDisplay(BMI) {
    var standard = "";
    if (BMI < 18.5 && BMI > 0) {
        standard = "偏瘦";
    } else if (18.5 <= BMI && BMI < 25) {
        standard = "标准";
    } else if (25 <= BMI && BMI < 30) {
        standard = "偏胖";
    } else if (BMI >= 30) {
        standard = "肥胖";
    }
    return {
        standard: standard,
        text: `BMI（即身体质量指数，简称体质指数，英文为Body Mass Index，简称BMI），是用体重公斤数除以身高米数平方得出的数字，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。根据您目前的身高体重远高于标准值，我们建议您采用科学的减肥方式，适当减轻体重，避免因肥胖导致的健康问题。`,
    };
}
//体脂率标准 fatRate为体脂率
function getFatRateDisplay(fatRate, sex, age) {
    if (age >= 30) {
        if (sex == 1) {
            if (fatRate < 11) {
                return {
                    standard: "偏低",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏低，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，建议均衡搭配饮食，适当增加卡路里摄入量。`,
                };
            } else if (fatRate >= 11 && fatRate < 22) {
                return {
                    standard: "标准",
                    text: `您的体脂率为${fatRate}%，体脂肪水平标准。保持健康规律作息，注意保持摄入足够水分，增加代谢，有利于保持健康标准体脂率。 `,
                };
            } else if (fatRate >= 22 && fatRate < 27) {
                return {
                    standard: "偏高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            } else if (fatRate >= 27) {
                return {
                    standard: "高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平严重偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            }
        } else {
            if (fatRate < 21) {
                return {
                    standard: "偏低",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏低，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，建议均衡搭配饮食，适当增加卡路里摄入量。`,
                };
            } else if (fatRate >= 21 && fatRate < 32) {
                return {
                    standard: "标准",
                    text: `您的体脂率为${fatRate}%，体脂肪水平标准。保持健康规律作息，注意保持摄入足够水分，增加代谢，有利于保持健康标准体脂率。 `,
                };
            } else if (fatRate >= 32 && fatRate < 39) {
                return {
                    standard: "偏高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            } else if (fatRate >= 39) {
                return {
                    standard: "高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平严重偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            }
        }
    } else if (0 < age && age < 30) {
        if (sex == 1) {
            if (fatRate < 10) {
                return {
                    standard: "偏低",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏低，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，建议均衡搭配饮食，适当增加卡路里摄入量。`,
                };
            } else if (fatRate >= 10 && fatRate < 21) {
                return {
                    standard: "标准",
                    text: `您的体脂率为${fatRate}%，体脂肪水平标准。保持健康规律作息，注意保持摄入足够水分，增加代谢，有利于保持健康标准体脂率。 `,
                };
            } else if (fatRate >= 21 && fatRate < 26) {
                return {
                    standard: "偏高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            } else if (fatRate >= 26) {
                return {
                    standard: "高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平严重偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            }
        } else {
            if (fatRate < 20) {
                return {
                    standard: "偏低",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏低，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，建议均衡搭配饮食，适当增加卡路里摄入量。`,
                };
            } else if (fatRate >= 20 && fatRate < 31) {
                return {
                    standard: "标准",
                    text: `您的体脂率为${fatRate}%，体脂肪水平标准。保持健康规律作息，注意保持摄入足够水分，增加代谢，有利于保持健康标准体脂率。 `,
                };
            } else if (fatRate >= 31 && fatRate < 38) {
                return {
                    standard: "偏高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            } else if (fatRate >= 38) {
                return {
                    standard: "高",
                    text: `您的体脂率为${fatRate}%，体脂肪水平严重偏高，处于危险区间。脂肪是维持人体新陈谢和运动的能量物质，过多/过少都不利于健康，请注意控制高油高脂食物的摄入，并且多做运动。`,
                };
            }
        }
    }
}
//肌肉率标准 muscle为肌肉率 muscleWeight为肌肉量
function getMuscleDisplay(muscle, sex, muscleWeight) {
    if (sex == 1) {
        if (muscle < 40) {
            return {
                standard: "不足",
                text: `你当前的肌肉率为${muscle}%，肌肉含量为${muscleWeight}kg，体内的肌肉含量不足。增加肌肉量能让您更快的消耗热量，以最健康的方式减掉多余脂肪。合理的饮食，适量的运动，能够增加肌肉含量。`,
            };
        } else if (40 <= muscle && muscle < 60) {
            return {
                standard: "标准",
                text: `你当前的肌肉率为${muscle}%，肌肉含量为${muscleWeight}kg，体内的肌肉含量标准，身体匀称健康，请您保持锻炼。`,
            };
        } else if (60 <= muscle) {
            return {
                standard: "优",
                text: `你当前的肌肉率为${muscle}%，肌肉含量为${muscleWeight}kg，体内肌肉结量比较充足，请继续保持适当的运动量和合理的饮食。`,
            };
        }
    } else {
        if (muscle < 30) {
            return {
                standard: "不足",
                text: `你当前的肌肉率为${muscle}%，肌肉含量为${muscleWeight}kg，体内的肌肉含量不足。增加肌肉量能让您更快的消耗热量，以最健康的方式减掉多余脂肪。合理的饮食，适量的运动，能够增加肌肉含量。`,
            };
        } else if (30 <= muscle && muscle < 50) {
            return {
                standard: "标准",
                text: `你当前的肌肉率为${muscle}%，肌肉含量为${muscleWeight}kg，体内的肌肉含量标准，身体匀称健康，请您保持锻炼。`,
            };
        } else if (50 <= muscle) {
            return {
                standard: "优",
                text: `你当前的肌肉率为${muscle}%，肌肉含量为${muscleWeight}kg，体内肌肉结量比较充足，请继续保持适当的运动量和合理的饮食。`,
            };
        }
    }
}
//水分标准  moisture为水分
function getMoistureDisplay(moisture, sex) {
    if (sex == 1) {
        if (moisture < 55) {
            return {
                standard: "不足",
                text: `您当前的身体水分含量为${moisture}%，水分处于偏低水平。身体里充足的水分能帮助您更好的消化食物和吸收养分，并促进代谢，带走身体毒素。建议您保持规律的饮食，每天八杯水，这样就可以维持正常的身体水分平衡。`,
            };
        } else if (55 <= moisture && moisture < 65) {
            return {
                standard: "标准",
                text: `您当前的身体水分含量为${moisture}%，水分处于标准区间，请继续保持健康的饮食习惯。`,
            };
        } else if (50 <= moisture) {
            return {
                standard: "优",
                text: `您当前的身体水分含量为${moisture}%，水分处于优良状态。适量饮水，适当运动，继续保持健康的饮食习惯，有助于保持良好的身体状态哦。`,
            };
        }
    } else {
        if (moisture < 45) {
            return {
                standard: "不足",
                text: `您当前的身体水分含量为${moisture}%，水分处于偏低水平。身体里充足的水分能帮助您更好的消化食物和吸收养分，并促进代谢，带走身体毒素。建议您保持规律的饮食，每天八杯水，这样就可以维持正常的身体水分平衡。`,
            };
        } else if (45 <= moisture && moisture < 60) {
            return {
                standard: "标准",
                text: `您当前的身体水分含量为${moisture}%，水分处于标准区间，请继续保持健康的饮食习惯。`,
            };
        } else if (60 <= moisture) {
            return {
                standard: "优",
                text: `您当前的身体水分含量为${moisture}%，水分处于优良状态。适量饮水，适当运动，继续保持健康的饮食习惯，有助于保持良好的身体状态哦。`,
            };
        }
    }
}
//骨重标准 bonemass为骨重
function getBonemassDisplay(bonemass, sex, weight) {
    if (sex == 1) {
        if (weight < 60) {
            if (bonemass < 2.4) {
                return {
                    standard: "不足",
                    text: `您的骨量水平偏低，建议补充含钙丰富的食品，均衡饮食，进行适量运动，有助于钙质的吸收。`,
                };
            } else if (2.4 <= bonemass && bonemass <= 2.6) {
                return {
                    standard: "标准",
                    text: `您的骨量水平标准，骨量在短期内不会出现明显变化，您只要保证健康的饮食和适当的锻炼，就可以维持稳定的骨量水平。`,
                };
            } else if (2.6 < bonemass) {
                return {
                    standard: "优",
                    text: `您的骨量水平高于标准水平，这说明您的生活习惯比较健康，营养摄入均衡。继续保持良好的生活习惯，有助于保持良好的骨量水平。`,
                };
            }
        } else if (60 <= weight && weight < 75) {
            if (bonemass < 2.8) {
                return {
                    standard: "不足",
                    text: `您的骨量水平偏低，建议补充含钙丰富的食品，均衡饮食，进行适量运动，有助于钙质的吸收。`,
                };
            } else if (2.8 <= bonemass && bonemass <= 3.0) {
                return {
                    standard: "标准",
                    text: `您的骨量水平标准，骨量在短期内不会出现明显变化，您只要保证健康的饮食和适当的锻炼，就可以维持稳定的骨量水平。`,
                };
            } else if (3.0 < bonemass) {
                return {
                    standard: "优",
                    text: `您的骨量水平高于标准水平，这说明您的生活习惯比较健康，营养摄入均衡。继续保持良好的生活习惯，有助于保持良好的骨量水平。`,
                };
            }
        } else if (75 <= weight) {
            if (bonemass < 3.1) {
                return {
                    standard: "不足",
                    text: `您的骨量水平偏低，建议补充含钙丰富的食品，均衡饮食，进行适量运动，有助于钙质的吸收。`,
                };
            } else if (3.1 <= bonemass && bonemass <= 3.3) {
                return {
                    standard: "标准",
                    text: `您的骨量水平标准，骨量在短期内不会出现明显变化，您只要保证健康的饮食和适当的锻炼，就可以维持稳定的骨量水平。`,
                };
            } else if (3.3 < bonemass) {
                return {
                    standard: "优",
                    text: `您的骨量水平高于标准水平，这说明您的生活习惯比较健康，营养摄入均衡。继续保持良好的生活习惯，有助于保持良好的骨量水平。`,
                };
            }
        }
    } else {
        if (weight < 45) {
            if (bonemass < 1.7) {
                return {
                    standard: "不足",
                    text: `您的骨量水平偏低，建议补充含钙丰富的食品，均衡饮食，进行适量运动，有助于钙质的吸收。`,
                };
            } else if (1.7 <= bonemass && bonemass <= 1.9) {
                return {
                    standard: "标准",
                    text: `您的骨量水平标准，骨量在短期内不会出现明显变化，您只要保证健康的饮食和适当的锻炼，就可以维持稳定的骨量水平。`,
                };
            } else if (1.9 < bonemass) {
                return {
                    standard: "优",
                    text: `您的骨量水平高于标准水平，这说明您的生活习惯比较健康，营养摄入均衡。继续保持良好的生活习惯，有助于保持良好的骨量水平。`,
                };
            }
        } else if (45 <= weight && weight < 60) {
            if (bonemass < 2.1) {
                return {
                    standard: "不足",
                    text: `您的骨量水平偏低，建议补充含钙丰富的食品，均衡饮食，进行适量运动，有助于钙质的吸收。`,
                };
            } else if (2.1 <= bonemass && bonemass <= 2.3) {
                return {
                    standard: "标准",
                    text: `您的骨量水平标准，骨量在短期内不会出现明显变化，您只要保证健康的饮食和适当的锻炼，就可以维持稳定的骨量水平。`,
                };
            } else if (2.3 < bonemass) {
                return {
                    standard: "优",
                    text: `您的骨量水平高于标准水平，这说明您的生活习惯比较健康，营养摄入均衡。继续保持良好的生活习惯，有助于保持良好的骨量水平。`,
                };
            }
        } else if (60 <= weight) {
            if (bonemass < 2.4) {
                return {
                    standard: "不足",
                    text: `您的骨量水平偏低，建议补充含钙丰富的食品，均衡饮食，进行适量运动，有助于钙质的吸收。`,
                };
            } else if (2.4 <= bonemass && bonemass <= 2.6) {
                return {
                    standard: "标准",
                    text: `您的骨量水平标准，骨量在短期内不会出现明显变化，您只要保证健康的饮食和适当的锻炼，就可以维持稳定的骨量水平。`,
                };
            } else if (2.6 < bonemass) {
                return {
                    standard: "优",
                    text: `您的骨量水平高于标准水平，这说明您的生活习惯比较健康，营养摄入均衡。继续保持良好的生活习惯，有助于保持良好的骨量水平。`,
                };
            }
        }
    }
}
//基础代谢率标准 
function getBMRDisplay(BMR, age, weight, sex) {
    var standard = 0;
    if (sex == 1) {
        if (0 < age && age < 3) {
            standard = 60.9 * weight - 54;
        } else if (3 <= age && age < 10) {
            standard = 22.7 * weight + 495;
        } else if (10 <= age && age < 18) {
            standard = 17.5 * weight + 651;
        } else if (18 <= age && age < 30) {
            standard = 15.3 * weight + 679;
        } else if (30 <= age) {
            standard = 11.6 * weight + 879;
        }
    } else {
        if (0 < age && age < 3) {
            standard = 61.0 * weight - 51;
        } else if (3 <= age && age < 10) {
            standard = 22.5 * weight + 499;
        } else if (10 <= age && age < 18) {
            standard = 12.2 * weight + 746;
        } else if (18 <= age && age < 30) {
            standard = 14.7 * weight + 496;
        } else if (30 <= age) {
            standard = 8.7 * weight + 820;
        }
    }
    if (BMR < standard) {
        return {
            standard: "偏低",
            text: `基于您的基础代谢水平，推荐您每日的摄入热量为${standard}kcal.您的基础代谢率为${BMR}kcal,低于标准区间。均衡合理的热量摄入，适量运动能帮助您健康减脂，达到理想身材。 `,
        };
    } else {
        return {
            standard: "优",
            text: `您的基础代谢率为${BMR}kcal,目前已达标。每天进行一些低强度的运动，合理的热量摄入有助您增加肌肉。`,
        };
    }
}
//内脏脂肪指数标准
function getVisceralfatDisplay(visceralfat) {
    if (visceralfat < 9) {
        return {
            standard: "标准",
            text: `内脏脂肪指数反映人体内内脏脂肪堆积的程度。保持标准的内脏脂肪指数，可以大幅降低心脏病、高血压、高血脂和2型糖尿病的发病风险。您的内脏脂肪水平正常，请继续保持健康饮食和适当运动。`,
        };
    } else if (9 <= visceralfat && visceralfat < 14) {
        return {
            standard: "警惕",
            text: `您的内脏脂肪处于偏高范围内，内脏脂肪指数偏高，将增加心脏病、高血压、高血脂和2型糖尿病的发病风险。健康您控制饮食，减少糖分高、脂肪高、油炸等食物摄入，多吃谷类、蔬菜、水果等富含维生素、蛋白的蔬菜水果，同时多做运动。`,
        };
    } else if (14 <= visceralfat) {
        return {
            standard: "危险",
            text: `您的内脏脂肪水平严重偏高，内脏脂肪指数偏高，将增加心脏病、高血压、高血脂和2型糖尿病的发病风险。健康您控制饮食，减少糖分高、脂肪高、油炸等食物摄入，多吃谷类、蔬菜、水果等富含维生素、蛋白的蔬菜水果，同时多做运动。`,
        };
    }
}
//皮下脂肪标准
function getSubcutaneousFatDisplay(proteinRate, sex) {
    if (sex == 1) {
        if (proteinRate < 7) {
            return {
                standard: "不足",
                text: `皮下脂脂肪就是贮存于皮下的脂肪组织，人体的脂肪大约有2/3贮存在皮下组织。皮下脂肪主要的作用有 绝热和贮存 。皮下脂肪是人体储存‘余粮’的主要场所。您目前处于正常水平以下，不足的皮下脂肪可能会出现身体偏瘦，皮肤缺乏光泽或有全身痛，没力气等现象，建议你平时注意饮食加强营养，避免劳累情绪激动，适当运动锻炼，避免受风寒着凉。`,
            };
        } else if (7 <= proteinRate && proteinRate < 15) {
            return {
                standard: "标准",
                text: `皮下脂脂肪就是贮存于皮下的脂肪组织，人体的脂肪大约有2/3贮存在皮下组织。皮下脂肪主要的作用有 绝热和贮存 您的皮下脂肪处于正常水平。坚持合理的饮食，良好的生活习惯，适量运动，就可以使身材和健康状态都保持在良好的范围内。`,
            };
        } else if (15 <= proteinRate) {
            return {
                standard: "偏高",
                text: `您的皮下脂肪高于正常水平。高糖分高脂肪饮食、久坐少动、遗传因素等都是引起皮下脂肪偏高的原因。建议注意均衡饮食，保持良好的生活习惯，控制热量摄入，进行适当运动。`,
            };
        }
    } else {
        if (proteinRate < 11) {
            return {
                standard: "不足",
                text: `皮下脂脂肪就是贮存于皮下的脂肪组织，人体的脂肪大约有2/3贮存在皮下组织。皮下脂肪主要的作用有 绝热和贮存 。皮下脂肪是人体储存‘余粮’的主要场所。您目前处于正常水平以下，不足的皮下脂肪可能会出现身体偏瘦，皮肤缺乏光泽或有全身痛，没力气等现象，建议你平时注意饮食加强营养，避免劳累情绪激动，适当运动锻炼，避免受风寒着凉。`,
            };
        } else if (11 <= proteinRate && proteinRate < 17) {
            return {
                standard: "标准",
                text: `皮下脂脂肪就是贮存于皮下的脂肪组织，人体的脂肪大约有2/3贮存在皮下组织。皮下脂肪主要的作用有 绝热和贮存 您的皮下脂肪处于正常水平。坚持合理的饮食，良好的生活习惯，适量运动，就可以使身材和健康状态都保持在良好的范围内。`,
            };
        } else if (17 <= proteinRate) {
            return {
                standard: "偏高",
                text: `您的皮下脂肪高于正常水平。高糖分高脂肪饮食、久坐少动、遗传因素等都是引起皮下脂肪偏高的原因。建议注意均衡饮食，保持良好的生活习惯，控制热量摄入，进行适当运动。`,
            };
        }
    }
}
//蛋白率
function getProteinRateDisplay(proteinRate, sex) {
    if (sex == 1) {
        if (proteinRate < 16) {
            return {
                standard: "不足",
                text: `您的蛋白水平偏低。缺乏蛋白质会引起免疫力下降、肌肉无力和贫血。建议你保持健康饮食，不过分节食，补充足够的营养。`,
            };
        } else if (16 <= proteinRate && proteinRate <= 18) {
            return {
                standard: "标准",
                text: `您的蛋白水平比例充足，请继续保持，同时也要防止过度摄入，蛋白质过度摄入也会在体内转化成脂肪，造成脂肪堆积。`,
            };
        } else if (18 < proteinRate) {
            return {
                standard: "优",
                text: `您的蛋白水平优于标准水平，继续保持良好的作息、均衡的饮食，更有助于蛋白质的吸收。`,
            };
        }
    } else {
        if (proteinRate < 14) {
            return {
                standard: "不足",
                text: `您的蛋白水平偏低。缺乏蛋白质会引起免疫力下降、肌肉无力和贫血。建议你保持健康饮食，不过分节食，补充足够的营养。`,
            };
        } else if (14 <= proteinRate && proteinRate <= 16) {
            return {
                standard: "标准",
                text: `您的蛋白水平比例充足，请继续保持，同时也要防止过度摄入，蛋白质过度摄入也会在体内转化成脂肪，造成脂肪堆积。`,
            };
        } else if (16 < proteinRate) {
            return {
                standard: "优",
                text: `您的蛋白水平优于标准水平，继续保持良好的作息、均衡的饮食，更有助于蛋白质的吸收。`,
            };
        }
    }
}
//身体年龄
function getPhysicalAgeDisplay(physicalAge, age) {
    if (physicalAge > age) {
        return {
            standard: "偏大",
            text: `身体年龄是以基础代谢为基础，综合体重、身高、脂肪、肌肉等数值，换算所得出的数值。所以身体年龄是一个高于或低于实际年龄的综合判断标准。仅供参考。`,
        };
    } else if (physicalAge == age) {
        return {
            standard: "标准",
            text: `身体年龄是以基础代谢为基础，综合体重、身高、脂肪、肌肉等数值，换算所得出的数值。所以身体年龄是一个高于或低于实际年龄的综合判断标准。仅供参考。`,
        };
    } else if (physicalAge < age) {
        return {
            standard: "优",
            text: `身体年龄是以基础代谢为基础，综合体重、身高、脂肪、肌肉等数值，换算所得出的数值。所以身体年龄是一个高于或低于实际年龄的综合判断标准。仅供参考。`,
        };
    }
}
//脂肪量标准 同 体脂率标准
function getFatWeightDisplay(fatRate, sex, age) {
    getFatRateDisplay(fatRate, sex, age)
}
//肌肉量标准 同 肌肉率标准
function getMuscleMassDisplay(muscle, sex, muscleWeight) {
    getMuscleDisplay(muscle, sex, muscleWeight)
}
//蛋白量标准 同 蛋白率标准
function getProteinDisplay(proteinRate, sex) {
    getProteinRateDisplay(proteinRate, sex)
}

//肥胖等级 stWeight=标准体重
function getFatLevel(weight, stWeight, height) {
    var Level = (weight - stWeight) / stWeight;
    if (Level < -0.2) {
        return {
            standard: "体重不足",
            text: `肥胖的程度,表现实际体重与理想体重的差距。肥胖等级是判定肥胖症的一个指标。基于目前的身体状况，您的标准体重范围为${
                18.5 * height * height
            }~${
                25 * height * height
            }kg，保持理想体重有助于身体各机能持续健康运转，维持最佳代谢状态。体重偏瘦或许已经危害到你的健康，建议您保持良好睡眠，适当食用含高卡路里食物，保持良好的饮食习惯。`,
        };
    } else if (Level >= -0.2 && Level < -0.1) {
        return {
            standard: "偏瘦",
            text: `肥胖的程度,表现实际体重与理想体重的差距。肥胖等级是判定肥胖症的一个指标。基于目前的身体状况，您的标准体重范围为${
                18.5 * height * height
            }~${
                25 * height * height
            }kg，保持理想体重有助于身体各机能持续健康运转，维持最佳代谢状态。体重偏瘦或许已经危害到你的健康，建议您保持良好睡眠，适当食用含高卡路里食物，保持良好的饮食习惯。`,
        };
    } else if (Level >= -0.1 && Level < 0.1) {
        return {
            standard: "标准",
            text: `肥胖的程度,表现实际体重与理想体重的差距。肥胖等级是判定肥胖症的一个指标。当前体重处于标准体重范围，状态良好，请继续保持良好的饮食习惯和适当的运动，保持完美身材吧。`,
        };
    } else if (Level > 0.1 && Level <= 0.2) {
        return {
            standard: "偏重",
            text: `肥胖的程度,表现实际体重与理想体重的差距。肥胖等级是判定肥胖症的一个指标。当前体重为${weight}kg，高于标准体重，过度肥胖不仅形体臃肿，更是各种慢性疾病的主要导火线，请减少高脂肪、高热量食物的摄入，制定健身计划，加强锻炼，努力恢复健康体重和好身材。`,
        };
    } else if (Level > 0.2) {
        return {
            standard: "超重",
            text: `肥胖的程度,表现实际体重与理想体重的差距。肥胖等级是判定肥胖症的一个指标。当前体重为${weight}kg，高于标准体重，过度肥胖不仅形体臃肿，更是各种慢性疾病的主要导火线，请减少高脂肪、高热量食物的摄入，制定健身计划，加强锻炼，努力恢复健康体重和好身材。`,
        };
    }
}
//体型 BFRResult=getFatRateDisplay().standard, ROMResult=getMuscleDisplay().standard
function getBodyLevel(BFRResult, ROMResult) {
    if ((BFRResult == "高" || BFRResult == "偏高") && ROMResult == "不足") {
        return "隐形肥胖";
    } else if ((BFRResult == "高" || BFRResult == "偏高") && ROMResult == "标准") {
        return "偏胖";
    } else if ((BFRResult == "高" || BFRResult == "偏高") && ROMResult == "优") {
        return "结实型偏胖";
    } else if (BFRResult == "标准" && ROMResult == "不足") {
        return "缺乏肌肉型";
    } else if (BFRResult == "标准" && ROMResult == "标准") {
        return "标准型";
    } else if (BFRResult == "标准" && ROMResult == "优") {
        return "标准肌肉型";
    } else if (BFRResult == "偏低" && ROMResult == "不足") {
        return "偏瘦";
    } else if (BFRResult == "偏低" && ROMResult == "标准") {
        return "偏瘦肌肉型";
    } else if (BFRResult == "偏低" && ROMResult == "优") {
        return "健美肌肉型";
    }
}
//身体评分
function getWeightScore(bmi) {
    if (bmi < 21.6) {
        return bmi / 21.6 * 100;
    } else {
        return 21.6 / bmi  * 100;
    } 
}
