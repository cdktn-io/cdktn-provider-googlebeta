# `googleStorageControlProjectFeatureConfig` Submodule <a name="`googleStorageControlProjectFeatureConfig` Submodule" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlProjectFeatureConfig <a name="GoogleStorageControlProjectFeatureConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config google_storage_control_project_feature_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfig(scope Construct, id *string, config GoogleStorageControlProjectFeatureConfigConfig) GoogleStorageControlProjectFeatureConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig">GoogleStorageControlProjectFeatureConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig">GoogleStorageControlProjectFeatureConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig">PutAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoAnnotateConfig` <a name="PutAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig"></a>

```go
func PutAutoAnnotateConfig(value GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter"></a>

```go
func PutFilter(value GoogleStorageControlProjectFeatureConfigFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleStorageControlProjectFeatureConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleStorageControlProjectFeatureConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleStorageControlProjectFeatureConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlProjectFeatureConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig">AutoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput">AutoAnnotateConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput">FeatureConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId">FeatureConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoAnnotateConfig`<sup>Required</sup> <a name="AutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig"></a>

```go
func AutoAnnotateConfig() GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter"></a>

```go
func Filter() GoogleStorageControlProjectFeatureConfigFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts"></a>

```go
func Timeouts() GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AutoAnnotateConfigInput`<sup>Optional</sup> <a name="AutoAnnotateConfigInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput"></a>

```go
func AutoAnnotateConfigInput() GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeatureConfigIdInput`<sup>Optional</sup> <a name="FeatureConfigIdInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput"></a>

```go
func FeatureConfigIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput"></a>

```go
func FilterInput() GoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FeatureConfigId`<sup>Required</sup> <a name="FeatureConfigId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId"></a>

```go
func FeatureConfigId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

&googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig {
	Models: interface{},
	ProcessingLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models">Models</a></code> | <code>interface{}</code> | models block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation">ProcessingLocation</a></code> | <code>*string</code> | The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported. |

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models"></a>

```go
Models interface{}
```

- *Type:* interface{}

models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#models GoogleStorageControlProjectFeatureConfig#models}

---

##### `ProcessingLocation`<sup>Required</sup> <a name="ProcessingLocation" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation"></a>

```go
ProcessingLocation *string
```

- *Type:* *string

The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported.

To avoid duplicate billing, configure exactly one processing location for each bucket
and model combination. If you configure multiple processing locations for the same
bucket and model across different feature configurations, a separate annotation run is
triggered in each location, and you're billed for each resulting annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#processing_location GoogleStorageControlProjectFeatureConfig#processing_location}

---

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

&googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name">Name</a></code> | <code>*string</code> | The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#name GoogleStorageControlProjectFeatureConfig#name}

---

### GoogleStorageControlProjectFeatureConfigConfig <a name="GoogleStorageControlProjectFeatureConfigConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

&googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoAnnotateConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig,
	FeatureConfigId: *string,
	DeletionPolicy: *string,
	Description: *string,
	Filter: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig">AutoAnnotateConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | auto_annotate_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId">FeatureConfigId</a></code> | <code>*string</code> | The ID of the feature configuration, which becomes the final component of its resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description">Description</a></code> | <code>*string</code> | A description of the feature configuration. The description can be up to 256 characters long. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoAnnotateConfig`<sup>Required</sup> <a name="AutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig"></a>

```go
AutoAnnotateConfig GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

auto_annotate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#auto_annotate_config GoogleStorageControlProjectFeatureConfig#auto_annotate_config}

---

##### `FeatureConfigId`<sup>Required</sup> <a name="FeatureConfigId" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId"></a>

```go
FeatureConfigId *string
```

- *Type:* *string

The ID of the feature configuration, which becomes the final component of its resource name.

The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
lowercase letters, digits, and dashes. The last character can't be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#feature_config_id GoogleStorageControlProjectFeatureConfig#feature_config_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#deletion_policy GoogleStorageControlProjectFeatureConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the feature configuration. The description can be up to 256 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#description GoogleStorageControlProjectFeatureConfig#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter"></a>

```go
Filter GoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#filter GoogleStorageControlProjectFeatureConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleStorageControlProjectFeatureConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#timeouts GoogleStorageControlProjectFeatureConfig#timeouts}

---

### GoogleStorageControlProjectFeatureConfigFilter <a name="GoogleStorageControlProjectFeatureConfigFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

&googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfigFilter {
	IncludedCloudStorageBuckets: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets"></a>

```go
IncludedCloudStorageBuckets GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#included_cloud_storage_buckets GoogleStorageControlProjectFeatureConfig#included_cloud_storage_buckets}

---

### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

&googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | The names of the buckets to include. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

The names of the buckets to include.

For Auto Annotate, regex wildcards aren't
supported, so specify exact bucket names (for example, 'my-bucket'). Each bucket
must already exist in the feature configuration's project. Up to 1,000 buckets can
be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#bucket_id_regexes GoogleStorageControlProjectFeatureConfig#bucket_id_regexes}

---

### GoogleStorageControlProjectFeatureConfigTimeouts <a name="GoogleStorageControlProjectFeatureConfigTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

&googlestoragecontrolprojectfeatureconfig.GoogleStorageControlProjectFeatureConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get"></a>

```go
func Get(index *f64) GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels">PutModels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModels` <a name="PutModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels"></a>

```go
func PutModels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models">Models</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput">ModelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput">ProcessingLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation">ProcessingLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models"></a>

```go
func Models() GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a>

---

##### `ModelsInput`<sup>Optional</sup> <a name="ModelsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput"></a>

```go
func ModelsInput() interface{}
```

- *Type:* interface{}

---

##### `ProcessingLocationInput`<sup>Optional</sup> <a name="ProcessingLocationInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput"></a>

```go
func ProcessingLocationInput() *string
```

- *Type:* *string

---

##### `ProcessingLocation`<sup>Required</sup> <a name="ProcessingLocation" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation"></a>

```go
func ProcessingLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---


### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlProjectFeatureConfigFilterOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlProjectFeatureConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```go
func PutIncludedCloudStorageBuckets(value GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```go
func IncludedCloudStorageBuckets() GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```go
func IncludedCloudStorageBucketsInput() GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---


### GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference <a name="GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlestoragecontrolprojectfeatureconfig"

googlestoragecontrolprojectfeatureconfig.NewGoogleStorageControlProjectFeatureConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



