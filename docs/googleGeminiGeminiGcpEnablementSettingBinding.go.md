# `googleGeminiGeminiGcpEnablementSettingBinding` Submodule <a name="`googleGeminiGeminiGcpEnablementSettingBinding` Submodule" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGeminiGcpEnablementSettingBinding <a name="GoogleGeminiGeminiGcpEnablementSettingBinding" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding google_gemini_gemini_gcp_enablement_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

googlegeminigeminigcpenablementsettingbinding.NewGoogleGeminiGeminiGcpEnablementSettingBinding(scope Construct, id *string, config GoogleGeminiGeminiGcpEnablementSettingBindingConfig) GoogleGeminiGeminiGcpEnablementSettingBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig">GoogleGeminiGeminiGcpEnablementSettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig">GoogleGeminiGeminiGcpEnablementSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts">GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiGeminiGcpEnablementSettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

googlegeminigeminigcpenablementsettingbinding.GoogleGeminiGeminiGcpEnablementSettingBinding_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

googlegeminigeminigcpenablementsettingbinding.GoogleGeminiGeminiGcpEnablementSettingBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

googlegeminigeminigcpenablementsettingbinding.GoogleGeminiGeminiGcpEnablementSettingBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

googlegeminigeminigcpenablementsettingbinding.GoogleGeminiGeminiGcpEnablementSettingBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleGeminiGeminiGcpEnablementSettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiGeminiGcpEnablementSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiGeminiGcpEnablementSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGeminiGcpEnablementSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingIdInput">GeminiGcpEnablementSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.timeouts"></a>

```go
func Timeouts() GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `GeminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="GeminiGcpEnablementSettingIdInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingIdInput"></a>

```go
func GeminiGcpEnablementSettingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.settingBindingIdInput"></a>

```go
func SettingBindingIdInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingId"></a>

```go
func GeminiGcpEnablementSettingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.settingBindingId"></a>

```go
func SettingBindingId() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGeminiGcpEnablementSettingBindingConfig <a name="GoogleGeminiGeminiGcpEnablementSettingBindingConfig" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

&googlegeminigeminigcpenablementsettingbinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GeminiGcpEnablementSettingId: *string,
	SettingBindingId: *string,
	Target: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Product: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>*string</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.target">Target</a></code> | <code>*string</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#id GoogleGeminiGeminiGcpEnablementSettingBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.product">Product</a></code> | <code>*string</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#project GoogleGeminiGeminiGcpEnablementSettingBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts">GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.geminiGcpEnablementSettingId"></a>

```go
GeminiGcpEnablementSettingId *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#gemini_gcp_enablement_setting_id GoogleGeminiGeminiGcpEnablementSettingBinding#gemini_gcp_enablement_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.settingBindingId"></a>

```go
SettingBindingId *string
```

- *Type:* *string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#setting_binding_id GoogleGeminiGeminiGcpEnablementSettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#target GoogleGeminiGeminiGcpEnablementSettingBinding#target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#deletion_policy GoogleGeminiGeminiGcpEnablementSettingBinding#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#id GoogleGeminiGeminiGcpEnablementSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#labels GoogleGeminiGeminiGcpEnablementSettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#location GoogleGeminiGeminiGcpEnablementSettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.product"></a>

```go
Product *string
```

- *Type:* *string

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#product GoogleGeminiGeminiGcpEnablementSettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#project GoogleGeminiGeminiGcpEnablementSettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts">GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#timeouts GoogleGeminiGeminiGcpEnablementSettingBinding#timeouts}

---

### GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts <a name="GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

&googlegeminigeminigcpenablementsettingbinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#create GoogleGeminiGeminiGcpEnablementSettingBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#delete GoogleGeminiGeminiGcpEnablementSettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#update GoogleGeminiGeminiGcpEnablementSettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#create GoogleGeminiGeminiGcpEnablementSettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#delete GoogleGeminiGeminiGcpEnablementSettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gemini_gemini_gcp_enablement_setting_binding#update GoogleGeminiGeminiGcpEnablementSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference <a name="GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegeminigeminigcpenablementsettingbinding"

googlegeminigeminigcpenablementsettingbinding.NewGoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGeminiGeminiGcpEnablementSettingBinding.GoogleGeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



