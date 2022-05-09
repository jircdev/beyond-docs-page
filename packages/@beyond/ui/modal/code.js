.beyond-alert-dialog.beyond-alert-dialog-centered .alert-dialog-content, .beyond-alert-dialog.beyond-alert-dialog-centered .actions {
  display: grid;
  justify-content: center;
}
.beyond-alert-dialog .alert-dialog-content {
  padding-top: 20px;
}
.beyond-alert-dialog .actions {
  border-top: 1px solid var(--gray-lighter);
  margin-top: 15px;
  display: grid;
  justify-content: end;
  padding: 15px 0 0;
}
.beyond-alert-dialog .actions .beyond-button {
  margin: 0;
}
.beyond-element-modal .close-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  display: inline-block;
  fill: var(--gray);
  color: var(--gray);
  transition: all 100ms ease-in;
  outline: none;
  cursor: pointer;
}
.beyond-element-modal .close-icon:hover, .beyond-element-modal .close-icon:focus {
  fill: var(--gray-darker);
  color: var(--gray);
  transition: all 100ms ease-in;
}
.beyond-element-modal .close-icon svg {
  height: 10px;
  width: 10px;
}
.beyond-confirm-dialog.beyond-confirm-dialog-centered {
  justify-content: center;
  text-align: center;
}
.beyond-confirm-dialog.beyond-confirm-dialog-centered .confirm-dialog-content, .beyond-confirm-dialog.beyond-confirm-dialog-centered .actions {
  display: grid;
  justify-content: center;
}
.beyond-confirm-dialog .confirm-dialog-content {
  padding-top: 20px;
}
.beyond-confirm-dialog .actions {
  border-top: 1px solid var(--gray-lighter);
  padding: 15px 0 0;
  margin-top: 15px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  justify-content: end;
}
.beyond-confirm-dialog .actions .beyond-button {
  margin: 0;
}
.beyond-element-modal.md .modal-content {
  width: 70%;
}
.beyond-element-modal.lg .modal-content {
  width: 90%;
}
@media (max-width: 600px) {
  .beyond-element-modal .modal-content, .beyond-element-modal.md .modal-content, .beyond-element-modal.lg .modal-content {
    width: 90%;
  }
}
@media (max-width: 900px) {
  .beyond-element-modal.md {
    min-width: 80%;
  }
  .beyond-element-modal.lg {
    width: 90%;
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-ms-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-o-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
@-moz-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
@-ms-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
@-o-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}
@-webkit-keyframes jello {
  11.1% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
    -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
    -o-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    -moz-transform: skewX(6.25deg) skewY(6.25deg);
    -ms-transform: skewX(6.25deg) skewY(6.25deg);
    -o-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
    -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
    -o-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
    -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
    -o-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    -moz-transform: skewX(0.390625deg) skewY(0.390625deg);
    -ms-transform: skewX(0.390625deg) skewY(0.390625deg);
    -o-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -moz-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -ms-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -o-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
  100% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
}
@-moz-keyframes jello {
  11.1% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
    -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
    -o-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    -moz-transform: skewX(6.25deg) skewY(6.25deg);
    -ms-transform: skewX(6.25deg) skewY(6.25deg);
    -o-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
    -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
    -o-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
    -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
    -o-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    -moz-transform: skewX(0.390625deg) skewY(0.390625deg);
    -ms-transform: skewX(0.390625deg) skewY(0.390625deg);
    -o-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -moz-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -ms-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -o-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
  100% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
}
@-ms-keyframes jello {
  11.1% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
    -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
    -o-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    -moz-transform: skewX(6.25deg) skewY(6.25deg);
    -ms-transform: skewX(6.25deg) skewY(6.25deg);
    -o-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
    -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
    -o-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
    -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
    -o-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    -moz-transform: skewX(0.390625deg) skewY(0.390625deg);
    -ms-transform: skewX(0.390625deg) skewY(0.390625deg);
    -o-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -moz-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -ms-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -o-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
  100% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
}
@-o-keyframes jello {
  11.1% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
    -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
    -o-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    -moz-transform: skewX(6.25deg) skewY(6.25deg);
    -ms-transform: skewX(6.25deg) skewY(6.25deg);
    -o-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
    -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
    -o-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
    -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
    -o-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    -moz-transform: skewX(0.390625deg) skewY(0.390625deg);
    -ms-transform: skewX(0.390625deg) skewY(0.390625deg);
    -o-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -moz-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -ms-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -o-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
  100% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
}
@keyframes jello {
  11.1% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
    -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
    -o-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    -moz-transform: skewX(6.25deg) skewY(6.25deg);
    -ms-transform: skewX(6.25deg) skewY(6.25deg);
    -o-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
    -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
    -o-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
    -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
    -o-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    -moz-transform: skewX(0.390625deg) skewY(0.390625deg);
    -ms-transform: skewX(0.390625deg) skewY(0.390625deg);
    -o-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -moz-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -ms-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    -o-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
  100% {
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-moz-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-ms-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-o-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -moz-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    -o-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -moz-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    -o-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -moz-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    -o-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -moz-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    -o-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -moz-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    -o-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-moz-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -moz-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    -o-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -moz-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    -o-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -moz-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    -o-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -moz-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    -o-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -moz-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    -o-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-ms-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -moz-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    -o-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -moz-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    -o-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -moz-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    -o-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -moz-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    -o-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -moz-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    -o-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-o-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -moz-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    -o-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -moz-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    -o-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -moz-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    -o-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -moz-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    -o-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -moz-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    -o-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    -moz-transform: scale3d(1.25, 0.75, 1);
    -ms-transform: scale3d(1.25, 0.75, 1);
    -o-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    -moz-transform: scale3d(0.75, 1.25, 1);
    -ms-transform: scale3d(0.75, 1.25, 1);
    -o-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    -moz-transform: scale3d(1.15, 0.85, 1);
    -ms-transform: scale3d(1.15, 0.85, 1);
    -o-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    -moz-transform: scale3d(0.95, 1.05, 1);
    -ms-transform: scale3d(0.95, 1.05, 1);
    -o-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    -moz-transform: scale3d(1.05, 0.95, 1);
    -ms-transform: scale3d(1.05, 0.95, 1);
    -o-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    -o-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@-moz-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@-ms-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@-o-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@-webkit-keyframes swing {
  20%, 40%, 60%, 80%, 100% {
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
  }
  20% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  40% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  60% {
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -o-transform: rotate(5deg);
    transform: rotate(5deg);
  }
  80% {
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@-moz-keyframes swing {
  20%, 40%, 60%, 80%, 100% {
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
  }
  20% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  40% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  60% {
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -o-transform: rotate(5deg);
    transform: rotate(5deg);
  }
  80% {
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@-ms-keyframes swing {
  20%, 40%, 60%, 80%, 100% {
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
  }
  20% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  40% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  60% {
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -o-transform: rotate(5deg);
    transform: rotate(5deg);
  }
  80% {
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@-o-keyframes swing {
  20%, 40%, 60%, 80%, 100% {
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
  }
  20% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  40% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  60% {
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -o-transform: rotate(5deg);
    transform: rotate(5deg);
  }
  80% {
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@keyframes swing {
  20%, 40%, 60%, 80%, 100% {
    -webkit-transform-origin: top center;
    -moz-transform-origin: top center;
    -ms-transform-origin: top center;
    -o-transform-origin: top center;
    transform-origin: top center;
  }
  20% {
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  40% {
    -webkit-transform: rotate(-10deg);
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  60% {
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -o-transform: rotate(5deg);
    transform: rotate(5deg);
  }
  80% {
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -moz-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    -o-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -moz-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    -o-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -moz-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    -o-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    -o-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@-moz-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -moz-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    -o-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -moz-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    -o-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -moz-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    -o-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    -o-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@-ms-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -moz-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    -o-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -moz-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    -o-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -moz-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    -o-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    -o-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@-o-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -moz-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    -o-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -moz-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    -o-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -moz-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    -o-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    -o-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -moz-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    -o-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -moz-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    -o-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -moz-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    -o-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    -o-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@-webkit-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -moz-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    -o-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -moz-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    -o-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -moz-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    -o-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -moz-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    -o-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -moz-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    -o-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-moz-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -moz-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    -o-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -moz-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    -o-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -moz-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    -o-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -moz-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    -o-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -moz-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    -o-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-ms-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -moz-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    -o-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -moz-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    -o-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -moz-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    -o-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -moz-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    -o-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -moz-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    -o-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-o-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -moz-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    -o-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -moz-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    -o-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -moz-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    -o-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -moz-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    -o-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -moz-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    -o-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -moz-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    -o-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -moz-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    -o-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -moz-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    -o-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -moz-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    -o-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -moz-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    -o-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-webkit-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  70% {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-moz-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  70% {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-ms-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  70% {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-o-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  70% {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  70% {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
    transform: translateY(30px);
  }
  80% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -o-transform: translateX(30px);
    transform: translateX(30px);
  }
  80% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -o-transform: translateX(30px);
    transform: translateX(30px);
  }
  80% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -o-transform: translateX(30px);
    transform: translateX(30px);
  }
  80% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -o-transform: translateX(30px);
    transform: translateX(30px);
  }
  80% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -o-transform: translateX(30px);
    transform: translateX(30px);
  }
  80% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    -o-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  80% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  80% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  80% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  80% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  80% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -o-transform: scale(0.95);
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
}
@-moz-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -o-transform: scale(0.95);
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
}
@-ms-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -o-transform: scale(0.95);
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
}
@-o-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -o-transform: scale(0.95);
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
}
@keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.95);
    -moz-transform: scale(0.95);
    -ms-transform: scale(0.95);
    -o-transform: scale(0.95);
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);
  }
}
@-webkit-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-moz-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-ms-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-o-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-webkit-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-moz-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-ms-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-o-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-webkit-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-moz-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-ms-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-o-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-webkit-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-moz-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-ms-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-o-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@-moz-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@-ms-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@-o-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@-webkit-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-moz-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-ms-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-o-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@-moz-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@-ms-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@-o-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}
@-webkit-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-moz-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-ms-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-o-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@-moz-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@-ms-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@-o-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }
}
@-webkit-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-moz-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-ms-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-o-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-moz-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-ms-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-o-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-webkit-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-moz-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-ms-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-o-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-webkit-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotateY(0);
    -moz-transform: perspective(400px) rotateY(0);
    -ms-transform: perspective(400px) rotateY(0);
    -o-transform: perspective(400px) rotateY(0);
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -o-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -o-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -moz-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -ms-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -o-transform: perspective(400px) rotateY(360deg) scale(0.95);
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: perspective(400px) scale(1);
    -moz-transform: perspective(400px) scale(1);
    -ms-transform: perspective(400px) scale(1);
    -o-transform: perspective(400px) scale(1);
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}
@-moz-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotateY(0);
    -moz-transform: perspective(400px) rotateY(0);
    -ms-transform: perspective(400px) rotateY(0);
    -o-transform: perspective(400px) rotateY(0);
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -o-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -o-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -moz-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -ms-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -o-transform: perspective(400px) rotateY(360deg) scale(0.95);
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: perspective(400px) scale(1);
    -moz-transform: perspective(400px) scale(1);
    -ms-transform: perspective(400px) scale(1);
    -o-transform: perspective(400px) scale(1);
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}
@-ms-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotateY(0);
    -moz-transform: perspective(400px) rotateY(0);
    -ms-transform: perspective(400px) rotateY(0);
    -o-transform: perspective(400px) rotateY(0);
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -o-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -o-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -moz-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -ms-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -o-transform: perspective(400px) rotateY(360deg) scale(0.95);
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: perspective(400px) scale(1);
    -moz-transform: perspective(400px) scale(1);
    -ms-transform: perspective(400px) scale(1);
    -o-transform: perspective(400px) scale(1);
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}
@-o-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotateY(0);
    -moz-transform: perspective(400px) rotateY(0);
    -ms-transform: perspective(400px) rotateY(0);
    -o-transform: perspective(400px) rotateY(0);
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -o-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -o-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -moz-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -ms-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -o-transform: perspective(400px) rotateY(360deg) scale(0.95);
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: perspective(400px) scale(1);
    -moz-transform: perspective(400px) scale(1);
    -ms-transform: perspective(400px) scale(1);
    -o-transform: perspective(400px) scale(1);
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}
@keyframes flip {
  0% {
    -webkit-transform: perspective(400px) rotateY(0);
    -moz-transform: perspective(400px) rotateY(0);
    -ms-transform: perspective(400px) rotateY(0);
    -o-transform: perspective(400px) rotateY(0);
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    -o-transform: perspective(400px) translateZ(150px) rotateY(170deg);
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -moz-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -o-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -moz-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -ms-transform: perspective(400px) rotateY(360deg) scale(0.95);
    -o-transform: perspective(400px) rotateY(360deg) scale(0.95);
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: perspective(400px) scale(1);
    -moz-transform: perspective(400px) scale(1);
    -ms-transform: perspective(400px) scale(1);
    -o-transform: perspective(400px) scale(1);
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
}
@-webkit-keyframes flipInX {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -moz-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    -o-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -moz-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    -o-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
}
@-moz-keyframes flipInX {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -moz-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    -o-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -moz-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    -o-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
}
@-ms-keyframes flipInX {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -moz-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    -o-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -moz-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    -o-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
}
@-o-keyframes flipInX {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -moz-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    -o-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -moz-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    -o-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
}
@keyframes flipInX {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -moz-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    -o-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -moz-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    -o-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
}
@-webkit-keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -moz-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    -o-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -moz-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    -o-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
@-moz-keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -moz-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    -o-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -moz-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    -o-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
@-ms-keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -moz-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    -o-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -moz-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    -o-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
@-o-keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -moz-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    -o-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -moz-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    -o-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
@keyframes flipInY {
  0% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -moz-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    -o-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -moz-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    -o-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
@-webkit-keyframes flipOutX {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
}
@-moz-keyframes flipOutX {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
}
@-ms-keyframes flipOutX {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
}
@-o-keyframes flipOutX {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
}
@keyframes flipOutX {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateX(0deg);
    -moz-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    -o-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateX(90deg);
    -moz-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    -o-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
  }
}
@-webkit-keyframes flipOutY {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
}
@-moz-keyframes flipOutY {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
}
@-ms-keyframes flipOutY {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
}
@-o-keyframes flipOutY {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
}
@keyframes flipOutY {
  0% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(0deg);
    -moz-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    -o-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    -moz-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    -o-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
}
@-webkit-keyframes lightSpeedIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20%) skewX(30deg);
    -moz-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    -o-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(-15deg);
    -moz-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    -o-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
}
@-moz-keyframes lightSpeedIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20%) skewX(30deg);
    -moz-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    -o-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(-15deg);
    -moz-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    -o-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
}
@-ms-keyframes lightSpeedIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20%) skewX(30deg);
    -moz-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    -o-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(-15deg);
    -moz-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    -o-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
}
@-o-keyframes lightSpeedIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20%) skewX(30deg);
    -moz-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    -o-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(-15deg);
    -moz-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    -o-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
}
@keyframes lightSpeedIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
  60% {
    opacity: 1;
    -webkit-transform: translateX(-20%) skewX(30deg);
    -moz-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    -o-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
  }
  80% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(-15deg);
    -moz-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    -o-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
}
@-webkit-keyframes lightSpeedOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
}
@-moz-keyframes lightSpeedOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
}
@-ms-keyframes lightSpeedOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
}
@-o-keyframes lightSpeedOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
}
@keyframes lightSpeedOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0%) skewX(0deg);
    -moz-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    -o-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) skewX(-30deg);
    -moz-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    -o-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
  }
}
@-webkit-keyframes rotateIn {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-200deg);
    -moz-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    -o-transform: rotate(-200deg);
    transform: rotate(-200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-moz-keyframes rotateIn {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-200deg);
    -moz-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    -o-transform: rotate(-200deg);
    transform: rotate(-200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-ms-keyframes rotateIn {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-200deg);
    -moz-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    -o-transform: rotate(-200deg);
    transform: rotate(-200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-o-keyframes rotateIn {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-200deg);
    -moz-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    -o-transform: rotate(-200deg);
    transform: rotate(-200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@keyframes rotateIn {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-200deg);
    -moz-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    -o-transform: rotate(-200deg);
    transform: rotate(-200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-webkit-keyframes rotateInDownLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-moz-keyframes rotateInDownLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-ms-keyframes rotateInDownLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-o-keyframes rotateInDownLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@keyframes rotateInDownLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-webkit-keyframes rotateInDownRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-moz-keyframes rotateInDownRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-ms-keyframes rotateInDownRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-o-keyframes rotateInDownRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@keyframes rotateInDownRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-webkit-keyframes rotateInUpLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-moz-keyframes rotateInUpLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-ms-keyframes rotateInUpLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-o-keyframes rotateInUpLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@keyframes rotateInUpLeft {
  0% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-webkit-keyframes rotateInUpRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-moz-keyframes rotateInUpRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-ms-keyframes rotateInUpRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-o-keyframes rotateInUpRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@keyframes rotateInUpRight {
  0% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-webkit-keyframes rotateOut {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(200deg);
    -moz-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    -o-transform: rotate(200deg);
    transform: rotate(200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-moz-keyframes rotateOut {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(200deg);
    -moz-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    -o-transform: rotate(200deg);
    transform: rotate(200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-ms-keyframes rotateOut {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(200deg);
    -moz-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    -o-transform: rotate(200deg);
    transform: rotate(200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-o-keyframes rotateOut {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(200deg);
    -moz-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    -o-transform: rotate(200deg);
    transform: rotate(200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@keyframes rotateOut {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(200deg);
    -moz-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    -o-transform: rotate(200deg);
    transform: rotate(200deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
}
@-webkit-keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-moz-keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-ms-keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-o-keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-webkit-keyframes rotateOutDownRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-moz-keyframes rotateOutDownRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-ms-keyframes rotateOutDownRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-o-keyframes rotateOutDownRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@keyframes rotateOutDownRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-webkit-keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-moz-keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-ms-keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-o-keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
@-webkit-keyframes rotateOutUpRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-moz-keyframes rotateOutUpRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-ms-keyframes rotateOutUpRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-o-keyframes rotateOutUpRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@keyframes rotateOutUpRight {
  0% {
    opacity: 1;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  100% {
    opacity: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: right bottom;
    -moz-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    transform-origin: right bottom;
  }
}
@-webkit-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-ms-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-o-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes slideInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes slideInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-ms-keyframes slideInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes slideInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes slideOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-moz-keyframes slideOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-ms-keyframes slideOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-o-keyframes slideOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@keyframes slideOutDown {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -moz-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    -o-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}
@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-moz-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-ms-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-o-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -moz-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    -o-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-moz-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-ms-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-o-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -moz-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    -o-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}
@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-moz-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-ms-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-o-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -moz-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    -o-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}
@-webkit-keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  20%, 60% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(80deg);
    -moz-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    -o-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  40% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  80% {
    opacity: 1;
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg) translateY(0);
    -moz-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    -o-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(700px);
    -moz-transform: translateY(700px);
    -ms-transform: translateY(700px);
    -o-transform: translateY(700px);
    transform: translateY(700px);
  }
}
@-moz-keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  20%, 60% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(80deg);
    -moz-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    -o-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  40% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  80% {
    opacity: 1;
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg) translateY(0);
    -moz-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    -o-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(700px);
    -moz-transform: translateY(700px);
    -ms-transform: translateY(700px);
    -o-transform: translateY(700px);
    transform: translateY(700px);
  }
}
@-ms-keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  20%, 60% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(80deg);
    -moz-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    -o-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  40% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  80% {
    opacity: 1;
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg) translateY(0);
    -moz-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    -o-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(700px);
    -moz-transform: translateY(700px);
    -ms-transform: translateY(700px);
    -o-transform: translateY(700px);
    transform: translateY(700px);
  }
}
@-o-keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  20%, 60% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(80deg);
    -moz-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    -o-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  40% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  80% {
    opacity: 1;
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg) translateY(0);
    -moz-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    -o-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(700px);
    -moz-transform: translateY(700px);
    -ms-transform: translateY(700px);
    -o-transform: translateY(700px);
    transform: translateY(700px);
  }
}
@keyframes hinge {
  0% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  20%, 60% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(80deg);
    -moz-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    -o-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  40% {
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  80% {
    opacity: 1;
    animation-timing-function: ease-in-out;
    -webkit-transform: rotate(60deg) translateY(0);
    -moz-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    -o-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    transform-origin: top left;
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(700px);
    -moz-transform: translateY(700px);
    -ms-transform: translateY(700px);
    -o-transform: translateY(700px);
    transform: translateY(700px);
  }
}
@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -moz-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    -o-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@-moz-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -moz-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    -o-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@-ms-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -moz-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    -o-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@-o-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -moz-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    -o-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -moz-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    -o-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}
@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -moz-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    -o-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}
@-moz-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -moz-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    -o-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}
@-ms-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -moz-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    -o-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}
@-o-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -moz-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    -o-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}
@keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -moz-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    -o-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -moz-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    -o-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}
@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@-moz-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@-ms-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@-o-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@-webkit-keyframes zoomInDown {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
}
@-moz-keyframes zoomInDown {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
}
@-ms-keyframes zoomInDown {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
}
@-o-keyframes zoomInDown {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
}
@keyframes zoomInDown {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
}
@-webkit-keyframes zoomInLeft {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  }
}
@-moz-keyframes zoomInLeft {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  }
}
@-ms-keyframes zoomInLeft {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  }
}
@-o-keyframes zoomInLeft {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  }
}
@keyframes zoomInLeft {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  }
}
@-webkit-keyframes zoomInRight {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
  }
}
@-moz-keyframes zoomInRight {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
  }
}
@-ms-keyframes zoomInRight {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
  }
}
@-o-keyframes zoomInRight {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
  }
}
@keyframes zoomInRight {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
  }
}
@-webkit-keyframes zoomInUp {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
}
@-moz-keyframes zoomInUp {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
}
@-ms-keyframes zoomInUp {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
}
@-o-keyframes zoomInUp {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
}
@keyframes zoomInUp {
  0% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
  }
  60% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
}
@-webkit-keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    -moz-transform: scale3d(0.3, 0.3, 0.3);
    -ms-transform: scale3d(0.3, 0.3, 0.3);
    -o-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes zoomOutDown {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-moz-keyframes zoomOutDown {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-ms-keyframes zoomOutDown {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-o-keyframes zoomOutDown {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@keyframes zoomOutDown {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
}
@-moz-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
}
@-ms-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
}
@-o-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
}
@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -o-transform-origin: right center;
    transform-origin: right center;
  }
}
@-moz-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -o-transform-origin: right center;
    transform-origin: right center;
  }
}
@-ms-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -o-transform-origin: right center;
    transform-origin: right center;
  }
}
@-o-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -o-transform-origin: right center;
    transform-origin: right center;
  }
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
    -o-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -o-transform-origin: right center;
    transform-origin: right center;
  }
}
@-webkit-keyframes zoomOutUp {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-moz-keyframes zoomOutUp {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-ms-keyframes zoomOutUp {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@-o-keyframes zoomOutUp {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
@keyframes zoomOutUp {
  40% {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  }
  100% {
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
}
body.body-beyond-modal-opened {
  height: 100vh;
  overflow-y: hidden;
  padding-right: 15px;
  /* Avoid width reflow */
}

.beyond-element-modal {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.beyond-element-modal.show-modal {
  display: block;
  z-index: 99999;
  height: 100vh;
  width: 100vw;
  padding: 20px;
}
.beyond-element-modal .modal-wrapper {
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  -webkit-animation-name: zoomIn;
  -moz-animation-name: zoomIn;
  -ms-animation-name: zoomIn;
  -o-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;
  -ms-animation-iteration-count: 1;
  -o-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-duration: 300ms;
  -moz-animation-duration: 300ms;
  -ms-animation-duration: 300ms;
  -o-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-delay: 0s;
  -moz-animation-delay: 0s;
  -ms-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  -ms-animation-timing-function: ease;
  -o-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.beyond-element-modal.modal-hidden .modal-wrapper {
  -webkit-animation-name: zoomOut;
  -moz-animation-name: zoomOut;
  -ms-animation-name: zoomOut;
  -o-animation-name: zoomOut;
  animation-name: zoomOut;
  -webkit-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;
  -ms-animation-iteration-count: 1;
  -o-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-duration: 200ms;
  -moz-animation-duration: 200ms;
  -ms-animation-duration: 200ms;
  -o-animation-duration: 200ms;
  animation-duration: 200ms;
  -webkit-animation-delay: 0s;
  -moz-animation-delay: 0s;
  -ms-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  -ms-animation-timing-function: ease;
  -o-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.beyond-element-modal .modal-content {
  position: relative;
  color: #000;
  background: #fff;
}

