import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { PatientService } from 'src/app/service/patient.service'
import { DoctorService } from 'src/app/service/doctor.service'
 
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
 // fetched doctors list here
 public Name = [];
 public alldoctorlist;
 public lengtharray = [];
 doctors = ['Dr. Suman', 'Dr. jayesh', 'Dr. kirit', 'Dr. parth'];
 // model
  url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABqXSURBVHhe7Z15kF1VncdP9oUsJCmIgEvCyChLWERlnJkSq8aAkIAWyiIGZEAZRwcFZNCxtHQsZpypwZJhG1C0cIPIIgOBiDCFTBU7CGSBEJaQTSFKCOnOSifpOZ9f9/f568O95977Xrf+M9+q232+95zzO7/f73vPOe++fvf1sN6IEMGvXbt2hREjRkCNcwwfPryQ0xZ4PmzYMDvq8J07d7bGAlUcMP6vH388PLP82bBy1cqwbt3vwmsbN4Zt27fF2mFh7JgxYffJk8P06dPDjLe9NbzzHe8M737XYbGqb0xhqH31HJ+x53kujyYIJ7dv3x7GjRtnJ+Gvv/56GDt2rHEG6OnpaXHKtBkTEwBoi/OjRo0yji0GEN+2bVsYOXKkHWDr1q3WV07Asa0EwOULmH/DjeGXd98dVqx4MYwdNzaM6LdNkOrDb64s/Nq5Y4f97unZEbZu2xr2nTkzHD93bjjhIx+2tjHgMKx/bHzFjnzDV9kWHz16dNZXcRJN+7p53BH95JzySP9hsVMvRmQUIwyy2267WSM64PT48eONYxBDGpQ6DGkQbOE8QQBsEazE2bJlizmggDdv3my2FDD1jLX99e3hPy+9PCy8884wLnKufuzgn9oyLkeOA2LAL46jZn8wfPG888Lo6E/qK2NTljj4RlzyddOmTeab7MPJk8Sg/YQJE6wOP7EnLh+UV3KIWD6v2B0WG/ZqgKZiYJA+gyUG9mn73e9/P1w3/2dhtzgu9boaUzGA6upwju3R580xkSed+LHw92efbXWgjhhKfsqxm4qR5tGLQZwcyqvPY2sPSY0UKdhkZhAgyZUYaYCpGGDtb34TPn/e+eaHvxKBFwMwdhMxgDi2Nkf/xsfxr7j0krDXm/ay2MrE8L5iC15XjKo8phe1RfjHFoOrKxXj9oULwydO/6SVq8SAtysGnPLEmEBqTjp1Xlhwxx21xBCvKwYzo4kYFlf80UuCdbKOGEAbUZEYuamfBgguv+qqcPPNt4Rp06ZakKqjXMVBEzGAuIRdv359OPnEE8Nnzv502BWTONxdOP7iGMw9IxUDTs4G7CFFa11O0VQMrg6MambgYG7PAJdcdlm4/Y6FYcqUKWbbJ5sjx0Hd5FdxRDn+uOPCuef8g/Gme0ZODPLI4cWgjfLq8xh/9wVI4nNiMDNyYuCQFwOHq8T46fXzw2233/EGMQBBi1NOOaib7CrO2FOnTg23LVgQrv/ZDXaO5Km+SgwuRPGiPKZi0KdIDGARohYNc2LgiMTAAW9Ey1TdPWPXrp1h0eLF4eprrgnTYiJSMTxnXI6U1012FWcsyhzTpk0LV8blc/GSJa3x6oihvKV5JIccZctUKob5En/00lB7QioGdTgyWHsGAcBnHzsnTJo40c6pDuCUOONy5DgoS3YVtwTEsuegu7s73LXwDvOVWKinbypGbpkih+SuTIx0L4ZzQQ9noDIxtEyViYHDXgwczIkh/qWvfMVu9IDqAGPlkp9yUJbsOpyyuMbmGDNmbPjihV8yX6mnbSoGsZeJQR5zYtAWKK/Y0tjx6AuwapnCCM55MRDCi0FdmRia+k8vWxYeefQxa6s64MUQxJXMlPvkgiacsng69ujRo8LjTzwRlj2z3HiRGH4mkCsvBuckhi7qNI9eDL/32o0hBjCUEwOHJQbJx0DZnlEmBo6cfuZZYePGLgta8AkpSh5ol2Obco57McTJyaRJk8IPv39Nf01fnReDmUGulPw0j0Uzg3HLxMDecDpweDFATgzKZWKkG7gXY+lTT4c1a9a0xCB5SoA4h5JVlewqjm3KOV4kBiBRq1evDk/FGQ2oS8UgN14MBCgTg7xiu0wM5dlGV7IxQlCd7Bk4qKC8GOAH115rVx1gHA61LeJAfZvyouSnXGOBIo6vP/rxT4wTayqGuMTwewZt/EUNfB69GNiG41v0oc+JVNFUDHWSGCSfujrLlPHNm8LjTz5pTpA8DrUt4kB92+GUxdsRA46vDz/6aExg/qYvFYP+mim0ZdyymaE8Kq/mBUYxIjHohENeDAx4I7SVkdwyRXII4oEHH7JXVjqntpRTDpS8TjlxUU65oOQLKR8Tc3D/Aw9ZmThYerwYzI5UjPSizonh84h920OAN8JV78WgnBrxe0bZMkVyaE/b+x940Oz4gKnnSLkSRhm0yxmLco775KcceyTz/gcfNE5ulPyqDRzhGEd5LFqmsK08ahIMp5MaSVFvhDopiBEvBsmuEkNTnTtz+qkt9Rw5DpS8plzJreJCGSf+J+JSC6qWKX9Rg7KZoYtceSVPcHwzQUCRGEVGvBi5ZYp6BcBU3LBhQ8sBJU99y7h8a4fLFqibfMFzbOK7gBgcOTHo00QM8qi82qh6SSYx6OSN0IkBUiNyumxmKEHPLF8eRvc7KPjkgcHmQidiyBZ5WbVqtZU72TPIay6PrT0EdbwYlL0Yfpki+XXEANjeEa8mzsWpaPWc6zTZ4tgCOV6WbOC5fPMcYItzv/ntb62e2EHZzFAey8QoW2Gop2xLlhTDCAa8gl4MeN09A2fNqWivq7u71aYoYNCUY59yjmsskOPY5ki5bPG7q7urVd/uMuXzSF/ZI49wbLT2kNRIkRhNZgb2tIf07OixP5f6gIHGbodTFme8lGsskOPY4sjy+Fu2m4pBXhBDF7lWGL/ikCeNZz8x2q4YwItBAF4MsLMnro39bakH6tspLxJDZdCpGABro0b25SYVg7a5mUFbiUGecisM+9NwNhIMlIkhRcuMwP3MoL/EwDaD7LHHHlangJWwVsBtcmxSznH5DVKOPXHKKQfYosT7b5yTGE3vM9KLWnky+9Gu+sf64a1OUtQbabpniCOGZt4ee0wLO2N9WcCgKe9UDM+xzZFy2SKWPeNFJY4YoN09Q+Jgj3HEQWsPaaqoOCA4nPIzAzHE99n7zfba3QcMNHY7HFviSm7KhSoxQI7j+9v32884cYEqMTgHyFO64viLPM2rnWWQVNF0mcKIOlHPTIATHE6UicGSNWbMaPsQNG0VsJLXLheaJB94Xmcs2uM7e6Du13JiUOfFII9eDJ98Lffi5M72kKJXAXI6NSIxAM7iRLpMeTF4VQIOnjXLrjSQSwAQxz7I8brJB55XjS1ODIcecoiVqcvtGbmLGp7Lo+zF9n1/ywU06nTPSMXAHnjfEe+1z9VWJUAc+5RzXH6CHMd2yoFs5TgX0eGHHWa8Sgw/M6r2DOUJjj3lqbWHqJOMFIkhIwSHEfEqMag/8sgjbcpjywcMijhlccZLeVnyQZp8jpT7sUARp7wlxvmho2bbOVBHjHSZys0U+itvcGvFIGViAIwwE2SkiRhcYXA+yc6V1s6yRTnlQjtieA7Kxsbvw9/1rtb7cKkY5KVoz0jz6LnPo8QB+E0ubQ/x0yudGTIC6OSN1BGDczgJTj3l5NAd7ZUlIOVKfo7Lb+A5tjhyHMhWEd+0aXM44/TTjBfNjCavSovymC732B+OQTmRiuE7YQSnUiNlYlD2YrBccbXts1ffR/+rElKU/JSXiQGw14kY+LjP3nuHgw86qFCMdveMsjy29hD7GVFHDBmtIwZ9vBjChRd8MWx47TUr5xJCWVzJTrmQ49jiSHlubMBHlb584QVmq44Y7ewZ2PZ5pN56kWySqU5eUXg7YuAkSO9qZ8Ur7rBDD7V2QAnwCaEsnks2yHHZruJ+bIDP73n34eHAAw6weP2e4cVQ8r0Y5EX24VzUPq/+IvfiMA7HsJhQexyhqFPKq8RI94xUDPoSHAHMPmZOmDhxgjnvk0/ZcwUHmvCyZFdxfnd3bwq33nyj+S17VXtG1QpD/1weyZ3Z0x5SZKSJGJRzYjDLcF4BXfTPX7dnMgTGww8lKJds4Dm+pxykya7iAJ+++fWvDUi2likvRrpnlK0w+FW0Z6R5VN7Moox4MeoY8WLQJicG05ygAAEe8d73hk+fdZb9vZrxCEYJ8skFOY7vHCmvSn4RZ287fd688BdHHGHngMRod8/wyz1+5/JIe7PiG9HJGxksMdJNEcw79ePh6HjTtXHjxlaCBkMMz0FdMY6ePTuceUbfc46A5Ha6Z+TySq6UR/JKmwGPtMlI3ZlRtWfgAM77meEDhGPriquuCjfdfEuYOnWKBaOE/THEAOtffTV8+Li54dxzzuk/88aZAE9nAr775PsVhtjSFSeXR3LNeAMei/ZGqsSoMzNyYqQB33LrreGSSy+zR8tokxMDeE4IHE3FwH+WTIT4yIePt3OgyNcqMcgTPE1+04u69dUaOSN04hgqMTTVX355XfjcuV8Im+KrnIkTJ7YS2FSMlAMvBgc+TIhjXPytfw0zZsywOlDHV/Ig+1q2JA79lbc0r1Vi0P4Nj0XXUZQ2al8kBsE0uZHyAYIfXPvD8JPrrrPz9FVbkIoBfLJBGacvseHj6afNC2ec1ve2iFA1M3zyU94SuWSZImfkqkwMOONkH4uuUjQVg77YIihQJYYPOA2IsVjC7rz7bhOXD2rTT77WFQPs2LHTvoQGm3wJzec/91mzQyzyDV+Jo8g3kEt+yjvJY2sPqTJCmTZlYjRdpqoC3r6dL8TpG2vB7beHBQsXhueeez6MijZHRZs83D8yEYi+XJn4if874m+C//O3vz3MnXNsOG7OHGtLLLT1szgnBpw8eDHka9FM6OSiNkGaikFbnPFikPh2l6nc1Qf8MvXwI4+ExUuWhlVrVoeXXno5vBZfrm6LQfEnVsaYEO3svffeYb8owqxZB4WDDzzQRBSqfE3FqfKV9spb02UqFYP+/OiNRtDFEDv1xoT0s14emR5QH8WwQ4gOWRuBvtgQYgAI3s/6eBnwpbu7u5/ZhTKgPfU7nO0q0N77lvqKbe9rCnzBhuB9q/I1Jv4NeWR8IYoxIK9wbKBi/6liMbyRVAwMVomBY4L60u/SK67sff/ffLD3pFM/0btixYt23tsuCtDzqgApc04ounC8b0899XTvx075eO8HZh/Ve/mV/9W7/tX1/TV9qBLDc3KQ85U4y3xt7SFMpdgxO71oyrIAopFGewbgjvw7caP+1b3/a9N6/PhxNq25Sz704FnhyxdeGN40fbq1xZ58oU0MorUUpL7hd0xSyzd8BWVLKlx9X163Lvz7f1wcnli0KEydMsWWJv5suyX6/4Ejjwznf+HzreciAePgWycbuM8jfRlTeTRBUiOUGahsrWsqBvWXXHa5fU3f5BgcidGaDAgSHzZ2dYVDZs0KJ5/4sfCX73tff+1AcYp8bSKGwHPo1/7ox/Yg0e67796KBVvsDwDb7FHHHnNM+PI/XmDniK2TPSMnho0dfzClWgE0DbBKjBtuuilc/b1rolPj4/kx5lAqhueMtzU6ystcvo7v/X/11+GQQw7urx3YnoBJQi5Ab5vvMLnn3nvDPb+6tzVLaCsB0vZw6rC7deu28HefOsu+iU51TcRI85r6CjdfoqHWfUiRokBi0IlE58SgL/b4ttBzzj0vrItLAlOewIoCLuMK8PXoE196eeAB+4f937l/ODi+cuLOekq8qtOr3mPN2rVh1erVYcWLL4YnFy0OS5cutYthTEwID3KCur4A/In7Qthrr73CJd++2MYX0lnbdGaQR2LhaO0hGGTQMjG4GtJlSkYAYuAQiecrl779nUvClCl/SFoTMfpdGnDl9sQA8Y8HgAg2VlqAXAzcj9CDLx8jGQRM3xH9dbqIZL+JL8Bz7PP+1wXnnx/va461OsYbDDGACVI1M4rESGeGpu4/ffVrdq/Am4Q+oWUB4iyH50B9y7iALaB6QNmPXcWb+MZB3w0bXgvvec/h4d8uusjqQFUei8TweeSCsyULI2pUJAYdpGCZGARyyrzTWjdOQjsBew6UvKacsSjneJlvoMpXcsGboNf/+Ed2XvsSqNoz0rzCaWufXMyJUbVnkPxXXnklHD1nrvXX1AVNA0w5UPKacsainONlvoE6vhI7MR8VY+cZRD8z6J9bprwY5JE6fGt9lLRMDG+kSIwXV64MHz354/a6nAHqBFwWoOdAttrhlMUZO+VlvoEmvpIPvuGUb1Rd2f+kLvUSgzzSNs2jF4O25BqYVaYXRpqK8fwLL4QzzvqUfZso7esGnAuQMpCtTjljU065kPMVWxxVvpIXvh7w9DPPDMueeWbAzKjKoxejtYdQ8GsZHaqWKb70eN4n/9b+7CqDIBcgaCfgsmRX8Sa+gKa+Aj827XkF9pMfXmufeuRClxjklZwqj+SVCaDcUY84dmMoo1WvAiTGpvj7Ix890T5XpTrQNEBQN7lNeRNfwGD5yqN7G+Pd/c0/m2/vAIA6Fzn7D+O17kPqigGOP+GjNrjagqEKEFRxbFP2vK4vIMfb8Y1Xrfy+9eabbG/GVtme4cUA9lOdcmLoFcTZn/2cOVxXDBzrNEBQxrFNOeVCU99SDsrGLuMkf1csf+ozn7FlqUwMbhG8GGwdpV+t4cXACJ2uvPrqsDK+qpI4oCpgjpQ3DbCMMxblHC/zDWAv5yuQraact2fWrFkbrvru94yT13RmcIug8ainzl72KvllYtBw2bJl9q3PkydPtjqQCxgHOYYq4KLkp7zMN1DHV9lKx67L7abxhhvCk4sWWfK9GH5maKaA1h6SEwNw48e9hoy0E6DnoNOAxRmbsudlvoE/pq/sJ+zPv1hwm3GS72eG3tmgvY3LSTrkxPjqN75h66CMVAVshl1AKQftBphyxqacciHnK7Y4htJXcsjxzYv+xc7lxLA9RPcgZWIsXrw43Hff/a0plQsQ1Am4kwCBuMaq4kLKsZf65jmo60uOk7v/ueeesPy5Z1v2UzH00njAfUgqBjjhpFPizz6lqwL0vJMAQBVv4gv4U/vKOca7af71lmdmCvWch0ucAY9Fp2L89223xfOb/l+MiHa5xiKH3d3d4caf/3zAzCDv7M3itqmzh7BsSQw2eBQ8eu5x9jknkAuIY6gCZCzKOd7Et5QD2WrKm/rG9rBly9Zw5+1/2OD1YQnaWnsasaFLDL0K+GmcWnz4DDQNWA6lATTlRQGmvKlvngPZaodTFq/jGzmm+rr58+2cF4NJUbiHMJ3Ah+LsQBgJBfwgOMQxVAEzFuUcTwMu49jmGCzfUt7EV8osXfx/EnE2dOV9wB6iV1K3Llhgt/5/KjHglMVzAYIcxxZHyv1YoF1e5FvKvW8Azn+GA14M8yv+4JNz9p6LOp5wcnxlFSslSNOAgRzqlDcNuMq3lAPZasrb9Y1tgtzeeP11/TV9dVZPJa+u1PHRxx4LXV1dbYvBIYfSAJpyxqKc40198xzIVjucsngT38gtT/s+9XTfv8JAA97gZQ8Z8NUa4JbbFtjeAaoCBlVctptyjVXFhZRjL/Ul5XV9qeJNfYNPmDAxzL+h7z/CsaFru2i1YtkCDz/8iP3j3pzRwQ4o5XUCqssH27eUt+sbX6r54EMP2V8V/R5iLRFDt/cjR43sqygx2tThKo5t4HmdgIQcHwrfgOft+oYNyvfd/4Bxli2r1x4C7vzlXfY+vjrhoDfSaYApxzbllAt+bJD6UsVB2dh1OGVx+eZ5mW+gyjc4k+AXd/3SzjFT2D4G7CH8BxxuEgGdOLwRDrWlDNrlOEQ5x3MBYy/1zXMgW53yMl+FnK/Y4ijivDvyxBNPGn/DHsLUsTvFOFDOiDiQU015WYCeayzQTsCylY7dlHfqK/bKfAXY4ZEIYHVWili0ZLFt5mmnIg7kUDucsnjTAD3HFsdQ+VrkW8o79ZX7v4ceftjOWXt+gEcf+7VNoaJOngM51ClnbMopF3xAwHNscQylr5TFi3wt8w3U9ZWcP/TII3be9hA14lkKykWdPPcOg3a5HK7iQsqxl/rmOajrSxVv6pvn2OIo44iwatUaKwM7u/zZ56yB7wSqeKcBCp3wwfYt5Z36ClLfUj5y5Aj7WC6wmiVLl7SeKmrqcBXHQeB5k4ByfCh8A5534htHHV/4pzdLliw1br1Zrpg6uU6gKcdByikXqgKq4qBs7Dqcsrh887zMN1Dlm+yLgzLOI3s8egfMwooXV7YEqWukihcFmPJcwNhLA/QcyFanvMxXIecrtjg68ZVH71auWmXcer300kvWYLACLgvQ87IAQZ2AZSsduynvxFdsceQ4kK0yznOQv40aAOvJW8H6GFBdIzlOWbxJgGAoAi7jRb6lPOdr6kvKgWzlOH1eeaXvC0GHb96ypfWEaxMjoIqXBSzkAsYWx2AEDIo4ZfEiX8t8A3V89WOBIk6ZTzf29Lze9wTCiBHD7fFeblDWr3/V/t7Lu788UVrXKEi5HK7iQsqxlwboOajrSxVv6pvn2OLIceBtMwFIPv9OkO97HDN6TDhu7hxr0/psL+AdR95X4a+G9hVI8dUXD+6znLHO+Y8KWef+QYoGrRsQyPHU9mDzofSNtlz9rD58d5c9URVzuO/MmeGwww4N79hvv/Duww9v/UEwGuh7pI3ZoOcLU/CR+meeXR5eeGFFWLZ8eVixYoX9hwPEsT85xsH53X/bb061GyBoEnCnvBPfgOxx3pIek69yT88Oe8Js5owZ4YD99w8z3va2MOugA+27vIrAjOGd9gFfrYGCGNTfR/g7L4n3TgAGfP75F8JTy54OL738cli5clVYu3ZtWPf73+OlvYxDIMI20WJ/vgEOrhlGMByyXcRBJ8mmnOM+rjLObw5iZgyVLfmRc0HywOeb99kn/Nm+M6MAM628byzrL4Ep2BLIg/7U4Z88aC1ZzBIGkhiIA9QJBTGCQCANQGD2IM6q+Lp6/asbTDC+72Td735n36zT1dUd+/UlxkQjSdEOaUI0+3Ae5+Cch/cjHc/XeUgcAV8F6ngOkJ4k1HiM23g8D2d5iYXIe+0Zj6lTdw/T95we9txzz/g7HtP3DG99y1ss8fqwm4fPTZrH9BE38mpbQjyACSJHdPUWcaBBLICYDHGuFiW3DnCST7ZsjOLwHVpdXRvDps1bwuYoZvfmTWFLLG/bvs0+donDtOfgf1gxVt+6zEFCB/7nN3xqLaMW6AjbNPkvOSSFbxkaP26c/UGItXu38ePChImTwsQJu4VJkybbbx7WnDJl4NPFZSAXubzleJrHXbt2hf8DrNcgV1FKLcgAAAAASUVORK5CYII=";
  urlId;
 FORMPatientADD: FormGroup;
 submitted = false;
  constructor(private formBuilder: FormBuilder, 
    private addpatient:PatientService,
    
    private getdoclist:DoctorService,
    private route: ActivatedRoute,
    private router: Router) { }

   
    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); // read file as data url
       
        reader.onload = (event) => { // called once readAsDataURL is completed
         
          this.url = <string>event.target.result;
          alert(this.url)
        }
      }
    }

    onSelectFileId(event) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); // read file as data url
       
        reader.onload = (event) => { // called once readAsDataURL is completed
         
          this.urlId = <string>event.target.result;
          alert(this.urlId)
        }
      }
    }


  ngOnInit(): void {

    this.getdoclist.get__Doctor__list().subscribe(
      data => {

        this.alldoctorlist = data;
        this.lengtharray = data["result"]
        
        for (var i in this.alldoctorlist["result"]) {


          this.Name[i] = this.alldoctorlist["result"][i]["Name"];


          console.log(this.Name[i])
        }
        
      
      },
      err => {
        console.log(err)
      },
      () => {
      }

    )

    this.forrm()
    $(document).ready(function() {
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css( 'background-color', 'white');
      $('.as-link1').css( 'color', 'black');
      $('.as-link1').css( 'border-radius', '20px');
      $('.active-tab2').css('display', 'none');
      $('.as-link2').css( 'background-color', 'white');
      $('.as-link3').css( 'background-color', 'white');
     
      $('.as-link2').css( 'color', 'black');
      $('.as-link2').css( 'border-radius', '20px');
      $('.active-tab3').css('display', 'none');
      
      $('.as-link3').css( 'color', 'black');
      $('.as-link3').css( 'border-radius', '20px');
     
    });

    
    $(document).ready(function() {
      $('.adddoctor').css('color', 'gray');
      $('.adduser').css('color', 'black');
      $('.addpatient').css('color', 'black');
      $('.home').css('color', 'gray');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'gray');
      $('.case').css('color', 'gray');

    });


    // form 
    

  
  }

  forrm(){
   
    this.FORMPatientADD = this.formBuilder.group({

      
      Name: ['',[Validators.required,onlycharValidator]],
      DOB: ['',[Validators.required]],
      BloodGroup: ['',[Validators.required,BloodGroupValidator]],
      gender: ['male', [Validators.required]],
      Allocated: ['',[Validators.required]],
      Mobile: ['',[Validators.required,phoneNumberValidator,Validators.minLength(10)]],
      FamilyContactPersonName: ['',[Validators.required,onlycharValidator]],
      FamilyContactPersonRelationship: ['',[Validators.required,onlycharValidator]],
      Identification:['',[Validators.required]],
      Image:[''],
      
      FamilyContactPersonNumber: ['',[Validators.required,phoneNumberValidator,Validators.minLength(10)]],
    
 
  
  });
  }
  get fc() { return this.FORMPatientADD.controls; }

  onSubmit(){
   
    this.submitted = true;

    console.log(this.FORMPatientADD)

    if(this.FORMPatientADD.valid){
     
      console.log(this.FORMPatientADD);
      this.addpatient.AddPatient(
        this.FORMPatientADD.value.Name,
        this.FORMPatientADD.value.Age,
        this.FORMPatientADD.value.DOB,
        this.FORMPatientADD.value.BloodGroup,
        this.FORMPatientADD.value.gender,
        this.FORMPatientADD.value.Allocated,
        this.url,
        this.urlId,
        this.FORMPatientADD.value.Mobile,
        this.FORMPatientADD.value.FamilyContactPersonName,
        this.FORMPatientADD.value.FamilyContactPersonRelationship,
        this.FORMPatientADD.value.FamilyContactPersonNumber
        ).subscribe(data =>{
         alert(data["result"]);
        //  if(data["server"][0]["msg"] == "Package created successfully"){
        
        //    this.router.navigate(['./DashboardComponent/packinfoedit'])
        //  }
        //  else{
        //    this.router.navigate(['./DashboardComponent/pack-create'])
        //  }
         
     },
     err => {
       console.log(err['status'])
       if(err['status'] == '400'){
       }
       else if(err['status'] == '500'){
       }
     }
     
     )
    }
    }



}
 
function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}

function onlynumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /[0-9]/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}



function BloodGroupValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /(A|B|AB|O)[+-]/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}


function IFCSValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[A-Z]{4}0[A-Z0-9]{6}$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}


function onlycharValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[A-Za-z -]+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}