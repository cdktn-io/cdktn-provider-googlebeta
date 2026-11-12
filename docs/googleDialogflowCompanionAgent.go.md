# `googleDialogflowCompanionAgent` Submodule <a name="`googleDialogflowCompanionAgent` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCompanionAgent <a name="GoogleDialogflowCompanionAgent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgent(scope Construct, id *string, config GoogleDialogflowCompanionAgentConfig) GoogleDialogflowCompanionAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig">GoogleDialogflowCompanionAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig">GoogleDialogflowCompanionAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs">PutCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs">PutSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools">PutToolsetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs">ResetCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs">ResetSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools">ResetToolsetTools</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCesToolSpecs` <a name="PutCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs"></a>

```go
func PutCesToolSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSkillConfigs` <a name="PutSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs"></a>

```go
func PutSkillConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCompanionAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

---

##### `PutToolsetTools` <a name="PutToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools"></a>

```go
func PutToolsetTools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCesToolSpecs` <a name="ResetCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetCesToolSpecs"></a>

```go
func ResetCesToolSpecs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSkillConfigs` <a name="ResetSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetSkillConfigs"></a>

```go
func ResetSkillConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetToolsetTools` <a name="ResetToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.resetToolsetTools"></a>

```go
func ResetToolsetTools()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.GoogleDialogflowCompanionAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.GoogleDialogflowCompanionAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.GoogleDialogflowCompanionAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.GoogleDialogflowCompanionAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowCompanionAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs">CesToolSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs">SkillConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools">ToolsetTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput">CesToolSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput">CompanionAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput">SkillConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput">ToolsetToolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId">CompanionAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CesToolSpecs`<sup>Required</sup> <a name="CesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecs"></a>

```go
func CesToolSpecs() GoogleDialogflowCompanionAgentCesToolSpecsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList">GoogleDialogflowCompanionAgentCesToolSpecsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SkillConfigs`<sup>Required</sup> <a name="SkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigs"></a>

```go
func SkillConfigs() GoogleDialogflowCompanionAgentSkillConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList">GoogleDialogflowCompanionAgentSkillConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCompanionAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference">GoogleDialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `ToolsetTools`<sup>Required</sup> <a name="ToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetTools"></a>

```go
func ToolsetTools() GoogleDialogflowCompanionAgentToolsetToolsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList">GoogleDialogflowCompanionAgentToolsetToolsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CesToolSpecsInput`<sup>Optional</sup> <a name="CesToolSpecsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```go
func CesToolSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `CompanionAgentIdInput`<sup>Optional</sup> <a name="CompanionAgentIdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentIdInput"></a>

```go
func CompanionAgentIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SkillConfigsInput`<sup>Optional</sup> <a name="SkillConfigsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.skillConfigsInput"></a>

```go
func SkillConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsetToolsInput`<sup>Optional</sup> <a name="ToolsetToolsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.toolsetToolsInput"></a>

```go
func ToolsetToolsInput() interface{}
```

- *Type:* interface{}

---

##### `CompanionAgentId`<sup>Required</sup> <a name="CompanionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.companionAgentId"></a>

```go
func CompanionAgentId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCompanionAgentCesToolSpecs <a name="GoogleDialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentCesToolSpecs {
	CesTool: *string,
	ConfirmationRequirement: *string,
	ParameterOverrides: interface{},
	ProactiveEnabled: interface{},
	ReactiveEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool">CesTool</a></code> | <code>*string</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">ParameterOverrides</a></code> | <code>interface{}</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `CesTool`<sup>Optional</sup> <a name="CesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```go
CesTool *string
```

- *Type:* *string

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool GoogleDialogflowCompanionAgent#ces_tool}

---

##### `ConfirmationRequirement`<sup>Optional</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```go
ConfirmationRequirement *string
```

- *Type:* *string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```go
ParameterOverrides interface{}
```

- *Type:* interface{}

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `ProactiveEnabled`<sup>Optional</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```go
ProactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `ReactiveEnabled`<sup>Optional</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```go
ReactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides {
	ContextReferenceKey: *string,
	ParameterName: *string,
	FieldPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">ParameterName</a></code> | <code>*string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```go
ContextReferenceKey *string
```

- *Type:* *string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

### GoogleDialogflowCompanionAgentConfig <a name="GoogleDialogflowCompanionAgentConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CompanionAgentId: *string,
	Location: *string,
	CesToolSpecs: interface{},
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	SkillConfigs: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts,
	ToolsetTools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId">CompanionAgentId</a></code> | <code>*string</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location">Location</a></code> | <code>*string</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs">CesToolSpecs</a></code> | <code>interface{}</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description">Description</a></code> | <code>*string</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs">SkillConfigs</a></code> | <code>interface{}</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools">ToolsetTools</a></code> | <code>interface{}</code> | toolset_tools block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompanionAgentId`<sup>Required</sup> <a name="CompanionAgentId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.companionAgentId"></a>

```go
CompanionAgentId *string
```

- *Type:* *string

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#companion_agent_id GoogleDialogflowCompanionAgent#companion_agent_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#location GoogleDialogflowCompanionAgent#location}

---

##### `CesToolSpecs`<sup>Optional</sup> <a name="CesToolSpecs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```go
CesToolSpecs interface{}
```

- *Type:* interface{}

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#ces_tool_specs GoogleDialogflowCompanionAgent#ces_tool_specs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#deletion_policy GoogleDialogflowCompanionAgent#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#id GoogleDialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#project GoogleDialogflowCompanionAgent#project}.

---

##### `SkillConfigs`<sup>Optional</sup> <a name="SkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.skillConfigs"></a>

```go
SkillConfigs interface{}
```

- *Type:* interface{}

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_configs GoogleDialogflowCompanionAgent#skill_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCompanionAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts">GoogleDialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#timeouts GoogleDialogflowCompanionAgent#timeouts}

---

##### `ToolsetTools`<sup>Optional</sup> <a name="ToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentConfig.property.toolsetTools"></a>

```go
ToolsetTools interface{}
```

- *Type:* interface{}

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset_tools GoogleDialogflowCompanionAgent#toolset_tools}

---

### GoogleDialogflowCompanionAgentSkillConfigs <a name="GoogleDialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentSkillConfigs {
	GuidanceSkillConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig,
	SkillTriggeringEvent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">GuidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">SkillTriggeringEvent</a></code> | <code>*string</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `GuidanceSkillConfig`<sup>Optional</sup> <a name="GuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```go
GuidanceSkillConfig GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_skill_config GoogleDialogflowCompanionAgent#guidance_skill_config}

---

##### `SkillTriggeringEvent`<sup>Optional</sup> <a name="SkillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```go
SkillTriggeringEvent *string
```

- *Type:* *string

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#skill_triggering_event GoogleDialogflowCompanionAgent#skill_triggering_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig {
	GuidanceInstructions: interface{},
	OverarchingGuidance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">GuidanceInstructions</a></code> | <code>interface{}</code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">OverarchingGuidance</a></code> | <code>*string</code> | This is specific additional guidance that can be configured by the user. |

---

##### `GuidanceInstructions`<sup>Optional</sup> <a name="GuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```go
GuidanceInstructions interface{}
```

- *Type:* interface{}

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#guidance_instructions GoogleDialogflowCompanionAgent#guidance_instructions}

---

##### `OverarchingGuidance`<sup>Optional</sup> <a name="OverarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```go
OverarchingGuidance *string
```

- *Type:* *string

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#overarching_guidance GoogleDialogflowCompanionAgent#overarching_guidance}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions {
	Actions: interface{},
	Condition: *string,
	DisableSuggestedReply: interface{},
	DisplayDetails: *string,
	DisplayName: *string,
	TriggerEvent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">Condition</a></code> | <code>*string</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">DisableSuggestedReply</a></code> | <code>interface{}</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">DisplayDetails</a></code> | <code>*string</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">TriggerEvent</a></code> | <code>*string</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#actions GoogleDialogflowCompanionAgent#actions}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#condition GoogleDialogflowCompanionAgent#condition}

---

##### `DisableSuggestedReply`<sup>Optional</sup> <a name="DisableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```go
DisableSuggestedReply interface{}
```

- *Type:* interface{}

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#disable_suggested_reply GoogleDialogflowCompanionAgent#disable_suggested_reply}

---

##### `DisplayDetails`<sup>Optional</sup> <a name="DisplayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```go
DisplayDetails *string
```

- *Type:* *string

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_details GoogleDialogflowCompanionAgent#display_details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#display_name GoogleDialogflowCompanionAgent#display_name}

---

##### `TriggerEvent`<sup>Optional</sup> <a name="TriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```go
TriggerEvent *string
```

- *Type:* *string

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#trigger_event GoogleDialogflowCompanionAgent#trigger_event}

---

### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions {
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">Description</a></code> | <code>*string</code> | Description of action item. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#description GoogleDialogflowCompanionAgent#description}

---

### GoogleDialogflowCompanionAgentTimeouts <a name="GoogleDialogflowCompanionAgentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#create GoogleDialogflowCompanionAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#delete GoogleDialogflowCompanionAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#update GoogleDialogflowCompanionAgent#update}.

---

### GoogleDialogflowCompanionAgentToolsetTools <a name="GoogleDialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentToolsetTools {
	Toolset: *string,
	ConfirmationRequirement: *string,
	OperationId: *string,
	ParameterOverrides: interface{},
	ProactiveEnabled: interface{},
	ReactiveEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset">Toolset</a></code> | <code>*string</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId">OperationId</a></code> | <code>*string</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides">ParameterOverrides</a></code> | <code>interface{}</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#toolset GoogleDialogflowCompanionAgent#toolset}

---

##### `ConfirmationRequirement`<sup>Optional</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```go
ConfirmationRequirement *string
```

- *Type:* *string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#confirmation_requirement GoogleDialogflowCompanionAgent#confirmation_requirement}

---

##### `OperationId`<sup>Optional</sup> <a name="OperationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.operationId"></a>

```go
OperationId *string
```

- *Type:* *string

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#operation_id GoogleDialogflowCompanionAgent#operation_id}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```go
ParameterOverrides interface{}
```

- *Type:* interface{}

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_overrides GoogleDialogflowCompanionAgent#parameter_overrides}

---

##### `ProactiveEnabled`<sup>Optional</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```go
ProactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#proactive_enabled GoogleDialogflowCompanionAgent#proactive_enabled}

---

##### `ReactiveEnabled`<sup>Optional</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```go
ReactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#reactive_enabled GoogleDialogflowCompanionAgent#reactive_enabled}

---

### GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

&googledialogflowcompanionagent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides {
	ContextReferenceKey: *string,
	ParameterName: *string,
	FieldPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">ParameterName</a></code> | <code>*string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```go
ContextReferenceKey *string
```

- *Type:* *string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#context_reference_key GoogleDialogflowCompanionAgent#context_reference_key}

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#parameter_name GoogleDialogflowCompanionAgent#parameter_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dialogflow_companion_agent#field_path GoogleDialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCompanionAgentCesToolSpecsList <a name="GoogleDialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentCesToolSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentCesToolSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentCesToolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentCesToolSpecsOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentCesToolSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentCesToolSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">PutParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">ResetCesTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">ResetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">ResetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">ResetReactiveEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterOverrides` <a name="PutParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```go
func PutParameterOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCesTool` <a name="ResetCesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```go
func ResetCesTool()
```

##### `ResetConfirmationRequirement` <a name="ResetConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```go
func ResetConfirmationRequirement()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetProactiveEnabled` <a name="ResetProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```go
func ResetProactiveEnabled()
```

##### `ResetReactiveEnabled` <a name="ResetReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```go
func ResetReactiveEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">CesToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">ConfirmationRequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">ProactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">ReactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">CesTool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```go
func ParameterOverrides() GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList">GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `CesToolInput`<sup>Optional</sup> <a name="CesToolInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```go
func CesToolInput() *string
```

- *Type:* *string

---

##### `ConfirmationRequirementInput`<sup>Optional</sup> <a name="ConfirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```go
func ConfirmationRequirementInput() *string
```

- *Type:* *string

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveEnabledInput`<sup>Optional</sup> <a name="ProactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```go
func ProactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabledInput`<sup>Optional</sup> <a name="ReactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```go
func ReactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CesTool`<sup>Required</sup> <a name="CesTool" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```go
func CesTool() *string
```

- *Type:* *string

---

##### `ConfirmationRequirement`<sup>Required</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```go
func ConfirmationRequirement() *string
```

- *Type:* *string

---

##### `ProactiveEnabled`<sup>Required</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```go
func ProactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabled`<sup>Required</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```go
func ReactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">ContextReferenceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextReferenceKeyInput`<sup>Optional</sup> <a name="ContextReferenceKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```go
func ContextReferenceKeyInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```go
func ContextReferenceKey() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">ResetDisableSuggestedReply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">ResetDisplayDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">ResetTriggerEvent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisableSuggestedReply` <a name="ResetDisableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```go
func ResetDisableSuggestedReply()
```

##### `ResetDisplayDetails` <a name="ResetDisplayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```go
func ResetDisplayDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTriggerEvent` <a name="ResetTriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```go
func ResetTriggerEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">DisableSuggestedReplyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">DisplayDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">TriggerEventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">DisableSuggestedReply</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">DisplayDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">TriggerEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```go
func Actions() GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `DisableSuggestedReplyInput`<sup>Optional</sup> <a name="DisableSuggestedReplyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```go
func DisableSuggestedReplyInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayDetailsInput`<sup>Optional</sup> <a name="DisplayDetailsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```go
func DisplayDetailsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `TriggerEventInput`<sup>Optional</sup> <a name="TriggerEventInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```go
func TriggerEventInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `DisableSuggestedReply`<sup>Required</sup> <a name="DisableSuggestedReply" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```go
func DisableSuggestedReply() interface{}
```

- *Type:* interface{}

---

##### `DisplayDetails`<sup>Required</sup> <a name="DisplayDetails" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```go
func DisplayDetails() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TriggerEvent`<sup>Required</sup> <a name="TriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```go
func TriggerEvent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">PutGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">ResetGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">ResetOverarchingGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuidanceInstructions` <a name="PutGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```go
func PutGuidanceInstructions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuidanceInstructions` <a name="ResetGuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```go
func ResetGuidanceInstructions()
```

##### `ResetOverarchingGuidance` <a name="ResetOverarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```go
func ResetOverarchingGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">GuidanceInstructions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">GuidanceInstructionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">OverarchingGuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">OverarchingGuidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidanceInstructions`<sup>Required</sup> <a name="GuidanceInstructions" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```go
func GuidanceInstructions() GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `GuidanceInstructionsInput`<sup>Optional</sup> <a name="GuidanceInstructionsInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```go
func GuidanceInstructionsInput() interface{}
```

- *Type:* interface{}

---

##### `OverarchingGuidanceInput`<sup>Optional</sup> <a name="OverarchingGuidanceInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```go
func OverarchingGuidanceInput() *string
```

- *Type:* *string

---

##### `OverarchingGuidance`<sup>Required</sup> <a name="OverarchingGuidance" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```go
func OverarchingGuidance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### GoogleDialogflowCompanionAgentSkillConfigsList <a name="GoogleDialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentSkillConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentSkillConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentSkillConfigsOutputReference <a name="GoogleDialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentSkillConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentSkillConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">PutGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">ResetGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">ResetSkillTriggeringEvent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuidanceSkillConfig` <a name="PutGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```go
func PutGuidanceSkillConfig(value GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `ResetGuidanceSkillConfig` <a name="ResetGuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```go
func ResetGuidanceSkillConfig()
```

##### `ResetSkillTriggeringEvent` <a name="ResetSkillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```go
func ResetSkillTriggeringEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">GuidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">GuidanceSkillConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">SkillTriggeringEventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">SkillTriggeringEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidanceSkillConfig`<sup>Required</sup> <a name="GuidanceSkillConfig" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```go
func GuidanceSkillConfig() GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `GuidanceSkillConfigInput`<sup>Optional</sup> <a name="GuidanceSkillConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```go
func GuidanceSkillConfigInput() GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">GoogleDialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `SkillTriggeringEventInput`<sup>Optional</sup> <a name="SkillTriggeringEventInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```go
func SkillTriggeringEventInput() *string
```

- *Type:* *string

---

##### `SkillTriggeringEvent`<sup>Required</sup> <a name="SkillTriggeringEvent" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```go
func SkillTriggeringEvent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentTimeoutsOutputReference <a name="GoogleDialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCompanionAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentToolsetToolsList <a name="GoogleDialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentToolsetToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentToolsetToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentToolsetToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentToolsetToolsOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentToolsetToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentToolsetToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">PutParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">ResetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">ResetOperationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">ResetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">ResetReactiveEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterOverrides` <a name="PutParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```go
func PutParameterOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfirmationRequirement` <a name="ResetConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```go
func ResetConfirmationRequirement()
```

##### `ResetOperationId` <a name="ResetOperationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```go
func ResetOperationId()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetProactiveEnabled` <a name="ResetProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```go
func ResetProactiveEnabled()
```

##### `ResetReactiveEnabled` <a name="ResetReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```go
func ResetReactiveEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">ConfirmationRequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">OperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">ProactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">ReactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```go
func ParameterOverrides() GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList">GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `ConfirmationRequirementInput`<sup>Optional</sup> <a name="ConfirmationRequirementInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```go
func ConfirmationRequirementInput() *string
```

- *Type:* *string

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```go
func OperationIdInput() *string
```

- *Type:* *string

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveEnabledInput`<sup>Optional</sup> <a name="ProactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```go
func ProactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabledInput`<sup>Optional</sup> <a name="ReactiveEnabledInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```go
func ReactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ConfirmationRequirement`<sup>Required</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```go
func ConfirmationRequirement() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `ProactiveEnabled`<sup>Required</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```go
func ProactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabled`<sup>Required</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```go
func ReactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledialogflowcompanionagent"

googledialogflowcompanionagent.NewGoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">ContextReferenceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextReferenceKeyInput`<sup>Optional</sup> <a name="ContextReferenceKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```go
func ContextReferenceKeyInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```go
func ContextReferenceKey() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCompanionAgent.GoogleDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



