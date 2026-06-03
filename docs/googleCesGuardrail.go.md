# `googleCesGuardrail` Submodule <a name="`googleCesGuardrail` Submodule" id="@cdktn/provider-google-beta.googleCesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesGuardrail <a name="GoogleCesGuardrail" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrail(scope Construct, id *string, config GoogleCesGuardrailConfig) GoogleCesGuardrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig">GoogleCesGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig">GoogleCesGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback">PutCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter">PutContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy">PutLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity">PutLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety">PutModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback">ResetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter">ResetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy">ResetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity">ResetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety">ResetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction"></a>

```go
func PutAction(value GoogleCesGuardrailAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `PutCodeCallback` <a name="PutCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback"></a>

```go
func PutCodeCallback(value GoogleCesGuardrailCodeCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `PutContentFilter` <a name="PutContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter"></a>

```go
func PutContentFilter(value GoogleCesGuardrailContentFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `PutLlmPolicy` <a name="PutLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy"></a>

```go
func PutLlmPolicy(value GoogleCesGuardrailLlmPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `PutLlmPromptSecurity` <a name="PutLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity"></a>

```go
func PutLlmPromptSecurity(value GoogleCesGuardrailLlmPromptSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `PutModelSafety` <a name="PutModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety"></a>

```go
func PutModelSafety(value GoogleCesGuardrailModelSafety)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCesGuardrailTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCodeCallback` <a name="ResetCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetCodeCallback"></a>

```go
func ResetCodeCallback()
```

##### `ResetContentFilter` <a name="ResetContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetContentFilter"></a>

```go
func ResetContentFilter()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetId"></a>

```go
func ResetId()
```

##### `ResetLlmPolicy` <a name="ResetLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPolicy"></a>

```go
func ResetLlmPolicy()
```

##### `ResetLlmPromptSecurity` <a name="ResetLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetLlmPromptSecurity"></a>

```go
func ResetLlmPromptSecurity()
```

##### `ResetModelSafety` <a name="ResetModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetModelSafety"></a>

```go
func ResetModelSafety()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.GoogleCesGuardrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.GoogleCesGuardrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.GoogleCesGuardrail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.GoogleCesGuardrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCesGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput">CodeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput">ContentFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput">GuardrailIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput">LlmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput">LlmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput">ModelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId">GuardrailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.action"></a>

```go
func Action() GoogleCesGuardrailActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference">GoogleCesGuardrailActionOutputReference</a>

---

##### `CodeCallback`<sup>Required</sup> <a name="CodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallback"></a>

```go
func CodeCallback() GoogleCesGuardrailCodeCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference">GoogleCesGuardrailCodeCallbackOutputReference</a>

---

##### `ContentFilter`<sup>Required</sup> <a name="ContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilter"></a>

```go
func ContentFilter() GoogleCesGuardrailContentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference">GoogleCesGuardrailContentFilterOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `LlmPolicy`<sup>Required</sup> <a name="LlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicy"></a>

```go
func LlmPolicy() GoogleCesGuardrailLlmPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference">GoogleCesGuardrailLlmPolicyOutputReference</a>

---

##### `LlmPromptSecurity`<sup>Required</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurity"></a>

```go
func LlmPromptSecurity() GoogleCesGuardrailLlmPromptSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference">GoogleCesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `ModelSafety`<sup>Required</sup> <a name="ModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafety"></a>

```go
func ModelSafety() GoogleCesGuardrailModelSafetyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference">GoogleCesGuardrailModelSafetyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeouts"></a>

```go
func Timeouts() GoogleCesGuardrailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference">GoogleCesGuardrailTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.actionInput"></a>

```go
func ActionInput() GoogleCesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `CodeCallbackInput`<sup>Optional</sup> <a name="CodeCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.codeCallbackInput"></a>

```go
func CodeCallbackInput() GoogleCesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---

##### `ContentFilterInput`<sup>Optional</sup> <a name="ContentFilterInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.contentFilterInput"></a>

```go
func ContentFilterInput() GoogleCesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GuardrailIdInput`<sup>Optional</sup> <a name="GuardrailIdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailIdInput"></a>

```go
func GuardrailIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LlmPolicyInput`<sup>Optional</sup> <a name="LlmPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPolicyInput"></a>

```go
func LlmPolicyInput() GoogleCesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---

##### `LlmPromptSecurityInput`<sup>Optional</sup> <a name="LlmPromptSecurityInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.llmPromptSecurityInput"></a>

```go
func LlmPromptSecurityInput() GoogleCesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ModelSafetyInput`<sup>Optional</sup> <a name="ModelSafetyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.modelSafetyInput"></a>

```go
func ModelSafetyInput() GoogleCesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.guardrailId"></a>

```go
func GuardrailId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesGuardrailAction <a name="GoogleCesGuardrailAction" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailAction {
	GenerativeAnswer: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer,
	RespondImmediately: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately,
	TransferAgent: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `GenerativeAnswer`<sup>Optional</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.generativeAnswer"></a>

```go
GenerativeAnswer GoogleCesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#generative_answer GoogleCesGuardrail#generative_answer}

---

##### `RespondImmediately`<sup>Optional</sup> <a name="RespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.respondImmediately"></a>

```go
RespondImmediately GoogleCesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#respond_immediately GoogleCesGuardrail#respond_immediately}

---

##### `TransferAgent`<sup>Optional</sup> <a name="TransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction.property.transferAgent"></a>

```go
TransferAgent GoogleCesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#transfer_agent GoogleCesGuardrail#transfer_agent}

---

### GoogleCesGuardrailActionGenerativeAnswer <a name="GoogleCesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailActionGenerativeAnswer {
	Prompt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt">Prompt</a></code> | <code>*string</code> | The prompt to use for the generative answer. |

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer.property.prompt"></a>

```go
Prompt *string
```

- *Type:* *string

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

### GoogleCesGuardrailActionRespondImmediately <a name="GoogleCesGuardrailActionRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailActionRespondImmediately {
	Responses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses">Responses</a></code> | <code>interface{}</code> | responses block. |

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately.property.responses"></a>

```go
Responses interface{}
```

- *Type:* interface{}

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#responses GoogleCesGuardrail#responses}

---

### GoogleCesGuardrailActionRespondImmediatelyResponses <a name="GoogleCesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailActionRespondImmediatelyResponses {
	Text: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text">Text</a></code> | <code>*string</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#text GoogleCesGuardrail#text}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailActionTransferAgent <a name="GoogleCesGuardrailActionTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailActionTransferAgent {
	Agent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent">Agent</a></code> | <code>*string</code> | The name of the agent to transfer the conversation to. |

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent.property.agent"></a>

```go
Agent *string
```

- *Type:* *string

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#agent GoogleCesGuardrail#agent}

---

### GoogleCesGuardrailCodeCallback <a name="GoogleCesGuardrailCodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailCodeCallback {
	AfterAgentCallback: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback,
	AfterModelCallback: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback,
	BeforeAgentCallback: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback,
	BeforeModelCallback: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `AfterAgentCallback`<sup>Optional</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterAgentCallback"></a>

```go
AfterAgentCallback GoogleCesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#after_agent_callback GoogleCesGuardrail#after_agent_callback}

---

##### `AfterModelCallback`<sup>Optional</sup> <a name="AfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.afterModelCallback"></a>

```go
AfterModelCallback GoogleCesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#after_model_callback GoogleCesGuardrail#after_model_callback}

---

##### `BeforeAgentCallback`<sup>Optional</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```go
BeforeAgentCallback GoogleCesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#before_agent_callback GoogleCesGuardrail#before_agent_callback}

---

##### `BeforeModelCallback`<sup>Optional</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback.property.beforeModelCallback"></a>

```go
BeforeModelCallback GoogleCesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#before_model_callback GoogleCesGuardrail#before_model_callback}

---

### GoogleCesGuardrailCodeCallbackAfterAgentCallback <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackAfterModelCallback <a name="GoogleCesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeAgentCallback <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailCodeCallbackBeforeModelCallback <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#python_code GoogleCesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disabled GoogleCesGuardrail#disabled}

---

### GoogleCesGuardrailConfig <a name="GoogleCesGuardrailConfig" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	DisplayName: *string,
	GuardrailId: *string,
	Location: *string,
	Action: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailAction,
	CodeCallback: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailCodeCallback,
	ContentFilter: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailContentFilter,
	DeletionPolicy: *string,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	LlmPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailLlmPolicy,
	LlmPromptSecurity: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity,
	ModelSafety: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailModelSafety,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app">App</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId">GuardrailId</a></code> | <code>*string</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description">Description</a></code> | <code>*string</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#app GoogleCesGuardrail#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#display_name GoogleCesGuardrail#display_name}

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.guardrailId"></a>

```go
GuardrailId *string
```

- *Type:* *string

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#guardrail_id GoogleCesGuardrail#guardrail_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#location GoogleCesGuardrail#location}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.action"></a>

```go
Action GoogleCesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#action GoogleCesGuardrail#action}

---

##### `CodeCallback`<sup>Optional</sup> <a name="CodeCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.codeCallback"></a>

```go
CodeCallback GoogleCesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#code_callback GoogleCesGuardrail#code_callback}

---

##### `ContentFilter`<sup>Optional</sup> <a name="ContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.contentFilter"></a>

```go
ContentFilter GoogleCesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#content_filter GoogleCesGuardrail#content_filter}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#deletion_policy GoogleCesGuardrail#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#description GoogleCesGuardrail#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#enabled GoogleCesGuardrail#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#id GoogleCesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LlmPolicy`<sup>Optional</sup> <a name="LlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPolicy"></a>

```go
LlmPolicy GoogleCesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#llm_policy GoogleCesGuardrail#llm_policy}

---

##### `LlmPromptSecurity`<sup>Optional</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.llmPromptSecurity"></a>

```go
LlmPromptSecurity GoogleCesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#llm_prompt_security GoogleCesGuardrail#llm_prompt_security}

---

##### `ModelSafety`<sup>Optional</sup> <a name="ModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.modelSafety"></a>

```go
ModelSafety GoogleCesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model_safety GoogleCesGuardrail#model_safety}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#project GoogleCesGuardrail#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailConfig.property.timeouts"></a>

```go
Timeouts GoogleCesGuardrailTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts">GoogleCesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#timeouts GoogleCesGuardrail#timeouts}

---

### GoogleCesGuardrailContentFilter <a name="GoogleCesGuardrailContentFilter" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailContentFilter {
	MatchType: *string,
	BannedContents: *[]*string,
	BannedContentsInAgentResponse: *[]*string,
	BannedContentsInUserInput: *[]*string,
	DisregardDiacritics: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType">MatchType</a></code> | <code>*string</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents">BannedContents</a></code> | <code>*[]*string</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>*[]*string</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>*[]*string</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>interface{}</code> | If true, diacritics are ignored during matching. |

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.matchType"></a>

```go
MatchType *string
```

- *Type:* *string

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#match_type GoogleCesGuardrail#match_type}

---

##### `BannedContents`<sup>Optional</sup> <a name="BannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContents"></a>

```go
BannedContents *[]*string
```

- *Type:* *[]*string

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#banned_contents GoogleCesGuardrail#banned_contents}

---

##### `BannedContentsInAgentResponse`<sup>Optional</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```go
BannedContentsInAgentResponse *[]*string
```

- *Type:* *[]*string

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#banned_contents_in_agent_response GoogleCesGuardrail#banned_contents_in_agent_response}

---

##### `BannedContentsInUserInput`<sup>Optional</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```go
BannedContentsInUserInput *[]*string
```

- *Type:* *[]*string

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#banned_contents_in_user_input GoogleCesGuardrail#banned_contents_in_user_input}

---

##### `DisregardDiacritics`<sup>Optional</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter.property.disregardDiacritics"></a>

```go
DisregardDiacritics interface{}
```

- *Type:* interface{}

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#disregard_diacritics GoogleCesGuardrail#disregard_diacritics}

---

### GoogleCesGuardrailLlmPolicy <a name="GoogleCesGuardrailLlmPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailLlmPolicy {
	PolicyScope: *string,
	Prompt: *string,
	AllowShortUtterance: interface{},
	FailOpen: interface{},
	MaxConversationMessages: *f64,
	ModelSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope">PolicyScope</a></code> | <code>*string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt">Prompt</a></code> | <code>*string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.policyScope"></a>

```go
PolicyScope *string
```

- *Type:* *string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.prompt"></a>

```go
Prompt *string
```

- *Type:* *string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```go
AllowShortUtterance interface{}
```

- *Type:* interface{}

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```go
MaxConversationMessages *f64
```

- *Type:* *f64

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy.property.modelSettings"></a>

```go
ModelSettings GoogleCesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPolicyModelSettings <a name="GoogleCesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailLlmPolicyModelSettings {
	Model: *string,
	Temperature: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model">Model</a></code> | <code>*string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature">Temperature</a></code> | <code>*f64</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurity <a name="GoogleCesGuardrailLlmPromptSecurity" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailLlmPromptSecurity {
	CustomPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy,
	DefaultSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings,
	FailOpen: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```go
CustomPolicy GoogleCesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#custom_policy GoogleCesGuardrail#custom_policy}

---

##### `DefaultSettings`<sup>Optional</sup> <a name="DefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```go
DefaultSettings GoogleCesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#default_settings GoogleCesGuardrail#default_settings}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicy <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy {
	PolicyScope: *string,
	Prompt: *string,
	AllowShortUtterance: interface{},
	FailOpen: interface{},
	MaxConversationMessages: *f64,
	ModelSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">PolicyScope</a></code> | <code>*string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">Prompt</a></code> | <code>*string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```go
PolicyScope *string
```

- *Type:* *string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#policy_scope GoogleCesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```go
Prompt *string
```

- *Type:* *string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#prompt GoogleCesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```go
AllowShortUtterance interface{}
```

- *Type:* interface{}

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#allow_short_utterance GoogleCesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#fail_open GoogleCesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```go
MaxConversationMessages *f64
```

- *Type:* *f64

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#max_conversation_messages GoogleCesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```go
ModelSettings GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model_settings GoogleCesGuardrail#model_settings}

---

### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings {
	Model: *string,
	Temperature: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">Model</a></code> | <code>*string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">Temperature</a></code> | <code>*f64</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#model GoogleCesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#temperature GoogleCesGuardrail#temperature}

---

### GoogleCesGuardrailLlmPromptSecurityDefaultSettings <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings {

}
```


### GoogleCesGuardrailModelSafety <a name="GoogleCesGuardrailModelSafety" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailModelSafety {
	SafetySettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings">SafetySettings</a></code> | <code>interface{}</code> | safety_settings block. |

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety.property.safetySettings"></a>

```go
SafetySettings interface{}
```

- *Type:* interface{}

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#safety_settings GoogleCesGuardrail#safety_settings}

---

### GoogleCesGuardrailModelSafetySafetySettings <a name="GoogleCesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailModelSafetySafetySettings {
	Category: *string,
	Threshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category">Category</a></code> | <code>*string</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold">Threshold</a></code> | <code>*string</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.category"></a>

```go
Category *string
```

- *Type:* *string

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#category GoogleCesGuardrail#category}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettings.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#threshold GoogleCesGuardrail#threshold}

---

### GoogleCesGuardrailTimeouts <a name="GoogleCesGuardrailTimeouts" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

&googlecesguardrail.GoogleCesGuardrailTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#create GoogleCesGuardrail#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#delete GoogleCesGuardrail#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_ces_guardrail#update GoogleCesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesGuardrailActionGenerativeAnswerOutputReference <a name="GoogleCesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailActionGenerativeAnswerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailActionGenerativeAnswerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">PromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```go
func PromptInput() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---


### GoogleCesGuardrailActionOutputReference <a name="GoogleCesGuardrailActionOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer">PutGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately">PutRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent">PutTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer">ResetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately">ResetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent">ResetTransferAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenerativeAnswer` <a name="PutGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```go
func PutGenerativeAnswer(value GoogleCesGuardrailActionGenerativeAnswer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `PutRespondImmediately` <a name="PutRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately"></a>

```go
func PutRespondImmediately(value GoogleCesGuardrailActionRespondImmediately)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `PutTransferAgent` <a name="PutTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent"></a>

```go
func PutTransferAgent(value GoogleCesGuardrailActionTransferAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `ResetGenerativeAnswer` <a name="ResetGenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```go
func ResetGenerativeAnswer()
```

##### `ResetRespondImmediately` <a name="ResetRespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetRespondImmediately"></a>

```go
func ResetRespondImmediately()
```

##### `ResetTransferAgent` <a name="ResetTransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.resetTransferAgent"></a>

```go
func ResetTransferAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput">GenerativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput">RespondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput">TransferAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerativeAnswer`<sup>Required</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswer"></a>

```go
func GenerativeAnswer() GoogleCesGuardrailActionGenerativeAnswerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswerOutputReference">GoogleCesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `RespondImmediately`<sup>Required</sup> <a name="RespondImmediately" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediately"></a>

```go
func RespondImmediately() GoogleCesGuardrailActionRespondImmediatelyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference">GoogleCesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `TransferAgent`<sup>Required</sup> <a name="TransferAgent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgent"></a>

```go
func TransferAgent() GoogleCesGuardrailActionTransferAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference">GoogleCesGuardrailActionTransferAgentOutputReference</a>

---

##### `GenerativeAnswerInput`<sup>Optional</sup> <a name="GenerativeAnswerInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```go
func GenerativeAnswerInput() GoogleCesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionGenerativeAnswer">GoogleCesGuardrailActionGenerativeAnswer</a>

---

##### `RespondImmediatelyInput`<sup>Optional</sup> <a name="RespondImmediatelyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```go
func RespondImmediatelyInput() GoogleCesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---

##### `TransferAgentInput`<sup>Optional</sup> <a name="TransferAgentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.transferAgentInput"></a>

```go
func TransferAgentInput() GoogleCesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailAction">GoogleCesGuardrailAction</a>

---


### GoogleCesGuardrailActionRespondImmediatelyOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailActionRespondImmediatelyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailActionRespondImmediatelyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses">PutResponses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponses` <a name="PutResponses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```go
func PutResponses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses">Responses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">ResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```go
func Responses() GoogleCesGuardrailActionRespondImmediatelyResponsesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList">GoogleCesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `ResponsesInput`<sup>Optional</sup> <a name="ResponsesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```go
func ResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediately">GoogleCesGuardrailActionRespondImmediately</a>

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesList <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailActionRespondImmediatelyResponsesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesGuardrailActionRespondImmediatelyResponsesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```go
func Get(index *f64) GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesGuardrailActionTransferAgentOutputReference <a name="GoogleCesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailActionTransferAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailActionTransferAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput">AgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent">Agent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```go
func AgentInput() *string
```

- *Type:* *string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```go
func Agent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailActionTransferAgent">GoogleCesGuardrailActionTransferAgent</a>

---


### GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---


### GoogleCesGuardrailCodeCallbackOutputReference <a name="GoogleCesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailCodeCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailCodeCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">PutAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback">PutAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">PutBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">PutBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">ResetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">ResetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">ResetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">ResetBeforeModelCallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAfterAgentCallback` <a name="PutAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```go
func PutAfterAgentCallback(value GoogleCesGuardrailCodeCallbackAfterAgentCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `PutAfterModelCallback` <a name="PutAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```go
func PutAfterModelCallback(value GoogleCesGuardrailCodeCallbackAfterModelCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `PutBeforeAgentCallback` <a name="PutBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```go
func PutBeforeAgentCallback(value GoogleCesGuardrailCodeCallbackBeforeAgentCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `PutBeforeModelCallback` <a name="PutBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```go
func PutBeforeModelCallback(value GoogleCesGuardrailCodeCallbackBeforeModelCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `ResetAfterAgentCallback` <a name="ResetAfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```go
func ResetAfterAgentCallback()
```

##### `ResetAfterModelCallback` <a name="ResetAfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```go
func ResetAfterModelCallback()
```

##### `ResetBeforeAgentCallback` <a name="ResetBeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```go
func ResetBeforeAgentCallback()
```

##### `ResetBeforeModelCallback` <a name="ResetBeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```go
func ResetBeforeModelCallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">AfterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">AfterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">BeforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">BeforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterAgentCallback`<sup>Required</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```go
func AfterAgentCallback() GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `AfterModelCallback`<sup>Required</sup> <a name="AfterModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```go
func AfterModelCallback() GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `BeforeAgentCallback`<sup>Required</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```go
func BeforeAgentCallback() GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `BeforeModelCallback`<sup>Required</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```go
func BeforeModelCallback() GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference">GoogleCesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `AfterAgentCallbackInput`<sup>Optional</sup> <a name="AfterAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```go
func AfterAgentCallbackInput() GoogleCesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterAgentCallback">GoogleCesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `AfterModelCallbackInput`<sup>Optional</sup> <a name="AfterModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```go
func AfterModelCallbackInput() GoogleCesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackAfterModelCallback">GoogleCesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `BeforeAgentCallbackInput`<sup>Optional</sup> <a name="BeforeAgentCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```go
func BeforeAgentCallbackInput() GoogleCesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeAgentCallback">GoogleCesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `BeforeModelCallbackInput`<sup>Optional</sup> <a name="BeforeModelCallbackInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```go
func BeforeModelCallbackInput() GoogleCesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackBeforeModelCallback">GoogleCesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailCodeCallback">GoogleCesGuardrailCodeCallback</a>

---


### GoogleCesGuardrailContentFilterOutputReference <a name="GoogleCesGuardrailContentFilterOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailContentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailContentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents">ResetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">ResetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">ResetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics">ResetDisregardDiacritics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBannedContents` <a name="ResetBannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```go
func ResetBannedContents()
```

##### `ResetBannedContentsInAgentResponse` <a name="ResetBannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```go
func ResetBannedContentsInAgentResponse()
```

##### `ResetBannedContentsInUserInput` <a name="ResetBannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```go
func ResetBannedContentsInUserInput()
```

##### `ResetDisregardDiacritics` <a name="ResetDisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```go
func ResetDisregardDiacritics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">BannedContentsInAgentResponseInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput">BannedContentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">BannedContentsInUserInputInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">DisregardDiacriticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents">BannedContents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="BannedContentsInAgentResponseInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```go
func BannedContentsInAgentResponseInput() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInput`<sup>Optional</sup> <a name="BannedContentsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```go
func BannedContentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInUserInputInput`<sup>Optional</sup> <a name="BannedContentsInUserInputInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```go
func BannedContentsInUserInputInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisregardDiacriticsInput`<sup>Optional</sup> <a name="DisregardDiacriticsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```go
func DisregardDiacriticsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```go
func MatchTypeInput() *string
```

- *Type:* *string

---

##### `BannedContents`<sup>Required</sup> <a name="BannedContents" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```go
func BannedContents() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInAgentResponse`<sup>Required</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```go
func BannedContentsInAgentResponse() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInUserInput`<sup>Required</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```go
func BannedContentsInUserInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisregardDiacritics`<sup>Required</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```go
func DisregardDiacritics() interface{}
```

- *Type:* interface{}

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailContentFilter">GoogleCesGuardrailContentFilter</a>

---


### GoogleCesGuardrailLlmPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailLlmPolicyModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailLlmPolicyModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPolicyOutputReference <a name="GoogleCesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailLlmPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailLlmPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```go
func PutModelSettings(value GoogleCesGuardrailLlmPolicyModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```go
func ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```go
func ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```go
func ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```go
func ModelSettings() GoogleCesGuardrailLlmPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```go
func AllowShortUtteranceInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```go
func MaxConversationMessagesInput() *f64
```

- *Type:* *f64

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```go
func ModelSettingsInput() GoogleCesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyModelSettings">GoogleCesGuardrailLlmPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```go
func PolicyScopeInput() *string
```

- *Type:* *string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```go
func PromptInput() *string
```

- *Type:* *string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```go
func AllowShortUtterance() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```go
func MaxConversationMessages() *f64
```

- *Type:* *f64

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```go
func PolicyScope() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPolicy">GoogleCesGuardrailLlmPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```go
func PutModelSettings(value GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```go
func ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```go
func ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```go
func ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```go
func ModelSettings() GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```go
func AllowShortUtteranceInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```go
func MaxConversationMessagesInput() *f64
```

- *Type:* *f64

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```go
func ModelSettingsInput() GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings">GoogleCesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```go
func PolicyScopeInput() *string
```

- *Type:* *string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```go
func PromptInput() *string
```

- *Type:* *string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```go
func AllowShortUtterance() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```go
func MaxConversationMessages() *f64
```

- *Type:* *f64

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```go
func PolicyScope() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">DefaultPromptTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPromptTemplate`<sup>Required</sup> <a name="DefaultPromptTemplate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```go
func DefaultPromptTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### GoogleCesGuardrailLlmPromptSecurityOutputReference <a name="GoogleCesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailLlmPromptSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailLlmPromptSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">PutDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">ResetDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```go
func PutCustomPolicy(value GoogleCesGuardrailLlmPromptSecurityCustomPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `PutDefaultSettings` <a name="PutDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```go
func PutDefaultSettings(value GoogleCesGuardrailLlmPromptSecurityDefaultSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```go
func ResetCustomPolicy()
```

##### `ResetDefaultSettings` <a name="ResetDefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```go
func ResetDefaultSettings()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">DefaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```go
func CustomPolicy() GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference">GoogleCesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `DefaultSettings`<sup>Required</sup> <a name="DefaultSettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```go
func DefaultSettings() GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">GoogleCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```go
func CustomPolicyInput() GoogleCesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityCustomPolicy">GoogleCesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `DefaultSettingsInput`<sup>Optional</sup> <a name="DefaultSettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```go
func DefaultSettingsInput() GoogleCesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityDefaultSettings">GoogleCesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailLlmPromptSecurity">GoogleCesGuardrailLlmPromptSecurity</a>

---


### GoogleCesGuardrailModelSafetyOutputReference <a name="GoogleCesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailModelSafetyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailModelSafetyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings">PutSafetySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSafetySettings` <a name="PutSafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```go
func PutSafetySettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings">SafetySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput">SafetySettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```go
func SafetySettings() GoogleCesGuardrailModelSafetySafetySettingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList">GoogleCesGuardrailModelSafetySafetySettingsList</a>

---

##### `SafetySettingsInput`<sup>Optional</sup> <a name="SafetySettingsInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```go
func SafetySettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafety">GoogleCesGuardrailModelSafety</a>

---


### GoogleCesGuardrailModelSafetySafetySettingsList <a name="GoogleCesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailModelSafetySafetySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesGuardrailModelSafetySafetySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get"></a>

```go
func Get(index *f64) GoogleCesGuardrailModelSafetySafetySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesGuardrailModelSafetySafetySettingsOutputReference <a name="GoogleCesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailModelSafetySafetySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesGuardrailModelSafetySafetySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesGuardrailTimeoutsOutputReference <a name="GoogleCesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesguardrail"

googlecesguardrail.NewGoogleCesGuardrailTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesGuardrailTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesGuardrail.GoogleCesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



