# `googleFirebaseRemoteConfigRemoteConfig` Submodule <a name="`googleFirebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseRemoteConfigRemoteConfig <a name="GoogleFirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfig(scope Construct, id *string, config GoogleFirebaseRemoteConfigRemoteConfigConfig) GoogleFirebaseRemoteConfigRemoteConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig">GoogleFirebaseRemoteConfigRemoteConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig">GoogleFirebaseRemoteConfigRemoteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups">PutParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups">ResetParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameterGroups` <a name="PutParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```go
func PutParameterGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseRemoteConfigRemoteConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetParameterGroups` <a name="ResetParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```go
func ResetParameterGroups()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseRemoteConfigRemoteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups">ParameterGroups</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version">Version</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">ParameterGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```go
func Conditions() GoogleFirebaseRemoteConfigRemoteConfigConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterGroups`<sup>Required</sup> <a name="ParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```go
func ParameterGroups() GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```go
func Parameters() GoogleFirebaseRemoteConfigRemoteConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version"></a>

```go
func Version() GoogleFirebaseRemoteConfigRemoteConfigVersionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterGroupsInput`<sup>Optional</sup> <a name="ParameterGroupsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```go
func ParameterGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditions <a name="GoogleFirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigConditions {
	Expression: *string,
	Name: *string,
	TagColor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression">Expression</a></code> | <code>*string</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name">Name</a></code> | <code>*string</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor">TagColor</a></code> | <code>*string</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#expression GoogleFirebaseRemoteConfigRemoteConfig#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```go
Name *string
```

- *Type:* *string

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#name GoogleFirebaseRemoteConfigRemoteConfig#name}

---

##### `TagColor`<sup>Optional</sup> <a name="TagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```go
TagColor *string
```

- *Type:* *string

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#tag_color GoogleFirebaseRemoteConfigRemoteConfig#tag_color}

---

### GoogleFirebaseRemoteConfigRemoteConfigConfig <a name="GoogleFirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Conditions: interface{},
	Id: *string,
	ParameterGroups: interface{},
	Parameters: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">ParameterGroups</a></code> | <code>interface{}</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterGroups`<sup>Optional</sup> <a name="ParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```go
ParameterGroups interface{}
```

- *Type:* interface{}

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroups <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups {
	ParameterGroupName: *string,
	Description: *string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description">Description</a></code> | <code>*string</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```go
ParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters {
	ParameterName: *string,
	ConditionalValues: interface{},
	DefaultValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">ConditionalValues</a></code> | <code>interface{}</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">Description</a></code> | <code>*string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">ValueType</a></code> | <code>*string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `ConditionalValues`<sup>Optional</sup> <a name="ConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```go
ConditionalValues interface{}
```

- *Type:* interface{}

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```go
DefaultValue GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues {
	ConditionName: *string,
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">ConditionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```go
ConditionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue {
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParameters {
	ParameterName: *string,
	ConditionalValues: interface{},
	DefaultValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">ConditionalValues</a></code> | <code>interface{}</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description">Description</a></code> | <code>*string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType">ValueType</a></code> | <code>*string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `ConditionalValues`<sup>Optional</sup> <a name="ConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```go
ConditionalValues interface{}
```

- *Type:* interface{}

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```go
DefaultValue GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues {
	ConditionName: *string,
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">ConditionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```go
ConditionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue {
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigTimeouts <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}.

---

### GoogleFirebaseRemoteConfigRemoteConfigVersion <a name="GoogleFirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigVersion {

}
```


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

&googlefirebaseremoteconfigremoteconfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditionsList <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">ResetTagColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagColor` <a name="ResetTagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```go
func ResetTagColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">TagColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">TagColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagColorInput`<sup>Optional</sup> <a name="TagColorInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```go
func TagColorInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TagColor`<sup>Required</sup> <a name="TagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```go
func TagColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```go
func Parameters() GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```go
func ParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">ConditionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">ConditionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionNameInput`<sup>Optional</sup> <a name="ConditionNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```go
func ConditionNameInput() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```go
func ConditionName() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">PutConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">ResetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionalValues` <a name="PutConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```go
func PutConditionalValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `ResetConditionalValues` <a name="ResetConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```go
func ResetConditionalValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">ConditionalValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">ConditionalValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionalValues`<sup>Required</sup> <a name="ConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```go
func ConditionalValues() GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `ConditionalValuesInput`<sup>Optional</sup> <a name="ConditionalValuesInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```go
func ConditionalValuesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">ConditionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">ConditionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionNameInput`<sup>Optional</sup> <a name="ConditionNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```go
func ConditionNameInput() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```go
func ConditionName() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">PutConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">ResetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionalValues` <a name="PutConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```go
func PutConditionalValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `ResetConditionalValues` <a name="ResetConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```go
func ResetConditionalValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">ConditionalValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">ConditionalValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionalValues`<sup>Required</sup> <a name="ConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```go
func ConditionalValues() GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `ConditionalValuesInput`<sup>Optional</sup> <a name="ConditionalValuesInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```go
func ConditionalValuesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">IsLegacy</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">RollbackSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">UpdateOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">UpdateUser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsLegacy`<sup>Required</sup> <a name="IsLegacy" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```go
func IsLegacy() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RollbackSource`<sup>Required</sup> <a name="RollbackSource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```go
func RollbackSource() *string
```

- *Type:* *string

---

##### `UpdateOrigin`<sup>Required</sup> <a name="UpdateOrigin" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```go
func UpdateOrigin() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```go
func UpdateUser() GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```go
func VersionNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseRemoteConfigRemoteConfigVersion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```go
func Get(index *f64) GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseremoteconfigremoteconfig"

googlefirebaseremoteconfigremoteconfig.NewGoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



