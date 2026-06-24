# `googleFirebaseAiLogicConfig` Submodule <a name="`googleFirebaseAiLogicConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicConfig <a name="GoogleFirebaseAiLogicConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config google_firebase_ai_logic_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.NewGoogleFirebaseAiLogicConfig(scope Construct, id *string, config GoogleFirebaseAiLogicConfigConfig) GoogleFirebaseAiLogicConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig">GoogleFirebaseAiLogicConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig">GoogleFirebaseAiLogicConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig">PutGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig">PutTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter">PutTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig">ResetGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig">ResetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter">ResetTrafficFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenerativeLanguageConfig` <a name="PutGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig"></a>

```go
func PutGenerativeLanguageConfig(value GoogleFirebaseAiLogicConfigGenerativeLanguageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `PutTelemetryConfig` <a name="PutTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig"></a>

```go
func PutTelemetryConfig(value GoogleFirebaseAiLogicConfigTelemetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAiLogicConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---

##### `PutTrafficFilter` <a name="PutTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter"></a>

```go
func PutTrafficFilter(value GoogleFirebaseAiLogicConfigTrafficFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetGenerativeLanguageConfig` <a name="ResetGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig"></a>

```go
func ResetGenerativeLanguageConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTelemetryConfig` <a name="ResetTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig"></a>

```go
func ResetTelemetryConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficFilter` <a name="ResetTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter"></a>

```go
func ResetTrafficFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAiLogicConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAiLogicConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig">GenerativeLanguageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter">TrafficFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput">GenerativeLanguageConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput">TelemetryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput">TrafficFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GenerativeLanguageConfig`<sup>Required</sup> <a name="GenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig"></a>

```go
func GenerativeLanguageConfig() GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig"></a>

```go
func TelemetryConfig() GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAiLogicConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a>

---

##### `TrafficFilter`<sup>Required</sup> <a name="TrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter"></a>

```go
func TrafficFilter() GoogleFirebaseAiLogicConfigTrafficFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `GenerativeLanguageConfigInput`<sup>Optional</sup> <a name="GenerativeLanguageConfigInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput"></a>

```go
func GenerativeLanguageConfigInput() GoogleFirebaseAiLogicConfigGenerativeLanguageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TelemetryConfigInput`<sup>Optional</sup> <a name="TelemetryConfigInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput"></a>

```go
func TelemetryConfigInput() GoogleFirebaseAiLogicConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficFilterInput`<sup>Optional</sup> <a name="TrafficFilterInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput"></a>

```go
func TrafficFilterInput() GoogleFirebaseAiLogicConfigTrafficFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicConfigConfig <a name="GoogleFirebaseAiLogicConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

&googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeletionPolicy: *string,
	GenerativeLanguageConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig,
	Id: *string,
	Location: *string,
	Project: *string,
	TelemetryConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts,
	TrafficFilter: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig">GenerativeLanguageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | generative_language_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter">TrafficFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | traffic_filter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#deletion_policy GoogleFirebaseAiLogicConfig#deletion_policy}

---

##### `GenerativeLanguageConfig`<sup>Optional</sup> <a name="GenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig"></a>

```go
GenerativeLanguageConfig GoogleFirebaseAiLogicConfigGenerativeLanguageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

generative_language_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#generative_language_config GoogleFirebaseAiLogicConfig#generative_language_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#location GoogleFirebaseAiLogicConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}.

---

##### `TelemetryConfig`<sup>Optional</sup> <a name="TelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig"></a>

```go
TelemetryConfig GoogleFirebaseAiLogicConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#telemetry_config GoogleFirebaseAiLogicConfig#telemetry_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAiLogicConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#timeouts GoogleFirebaseAiLogicConfig#timeouts}

---

##### `TrafficFilter`<sup>Optional</sup> <a name="TrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter"></a>

```go
TrafficFilter GoogleFirebaseAiLogicConfigTrafficFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

traffic_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#traffic_filter GoogleFirebaseAiLogicConfig#traffic_filter}

---

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfig <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

&googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig {
	ApiKey: *string,
	ApiKeyWo: *string,
	ApiKeyWoVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo">ApiKeyWo</a></code> | <code>*string</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion">ApiKeyWoVersion</a></code> | <code>*string</code> | Triggers update of 'api_key_wo' write-only. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#api_key GoogleFirebaseAiLogicConfig#api_key}

---

##### `ApiKeyWo`<sup>Optional</sup> <a name="ApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo"></a>

```go
ApiKeyWo *string
```

- *Type:* *string

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#api_key_wo GoogleFirebaseAiLogicConfig#api_key_wo}

---

##### `ApiKeyWoVersion`<sup>Optional</sup> <a name="ApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion"></a>

```go
ApiKeyWoVersion *string
```

- *Type:* *string

Triggers update of 'api_key_wo' write-only.

Increment this value when an update to 'api_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#api_key_wo_version GoogleFirebaseAiLogicConfig#api_key_wo_version}

---

### GoogleFirebaseAiLogicConfigTelemetryConfig <a name="GoogleFirebaseAiLogicConfigTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

&googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfigTelemetryConfig {
	Mode: *string,
	SamplingRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode">Mode</a></code> | <code>*string</code> | The current monitoring mode used for this project. Possible values: NONE ALL. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | The percentage of requests to be sampled, expressed as a fraction in the range (0,1]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The current monitoring mode used for this project. Possible values: NONE ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#mode GoogleFirebaseAiLogicConfig#mode}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate"></a>

```go
SamplingRate *f64
```

- *Type:* *f64

The percentage of requests to be sampled, expressed as a fraction in the range (0,1].

Note that the actual sampling rate may be lower than
the specified value if the system is overloaded. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#sampling_rate GoogleFirebaseAiLogicConfig#sampling_rate}

---

### GoogleFirebaseAiLogicConfigTimeouts <a name="GoogleFirebaseAiLogicConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

&googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}.

---

### GoogleFirebaseAiLogicConfigTrafficFilter <a name="GoogleFirebaseAiLogicConfigTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

&googlefirebaseailogicconfig.GoogleFirebaseAiLogicConfigTrafficFilter {
	TemplateOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly">TemplateOnly</a></code> | <code>interface{}</code> | Only allows users to use AI Logic via prompt templates for this project. |

---

##### `TemplateOnly`<sup>Optional</sup> <a name="TemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly"></a>

```go
TemplateOnly interface{}
```

- *Type:* interface{}

Only allows users to use AI Logic via prompt templates for this project.

If true, only calls using server templates are permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_ai_logic_config#template_only GoogleFirebaseAiLogicConfig#template_only}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.NewGoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo">ResetApiKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion">ResetApiKeyWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetApiKeyWo` <a name="ResetApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo"></a>

```go
func ResetApiKeyWo()
```

##### `ResetApiKeyWoVersion` <a name="ResetApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion"></a>

```go
func ResetApiKeyWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput">ApiKeyWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput">ApiKeyWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo">ApiKeyWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion">ApiKeyWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKeyWoInput`<sup>Optional</sup> <a name="ApiKeyWoInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput"></a>

```go
func ApiKeyWoInput() *string
```

- *Type:* *string

---

##### `ApiKeyWoVersionInput`<sup>Optional</sup> <a name="ApiKeyWoVersionInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput"></a>

```go
func ApiKeyWoVersionInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiKeyWo`<sup>Required</sup> <a name="ApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo"></a>

```go
func ApiKeyWo() *string
```

- *Type:* *string

---

##### `ApiKeyWoVersion`<sup>Required</sup> <a name="ApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion"></a>

```go
func ApiKeyWoVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAiLogicConfigGenerativeLanguageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---


### GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference <a name="GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.NewGoogleFirebaseAiLogicConfigTelemetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate"></a>

```go
func ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput"></a>

```go
func SamplingRateInput() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAiLogicConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---


### GoogleFirebaseAiLogicConfigTimeoutsOutputReference <a name="GoogleFirebaseAiLogicConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.NewGoogleFirebaseAiLogicConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAiLogicConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseAiLogicConfigTrafficFilterOutputReference <a name="GoogleFirebaseAiLogicConfigTrafficFilterOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicconfig"

googlefirebaseailogicconfig.NewGoogleFirebaseAiLogicConfigTrafficFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAiLogicConfigTrafficFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly">ResetTemplateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplateOnly` <a name="ResetTemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly"></a>

```go
func ResetTemplateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput">TemplateOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly">TemplateOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateOnlyInput`<sup>Optional</sup> <a name="TemplateOnlyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput"></a>

```go
func TemplateOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateOnly`<sup>Required</sup> <a name="TemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly"></a>

```go
func TemplateOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseAiLogicConfigTrafficFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---



