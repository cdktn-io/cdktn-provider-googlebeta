# `googleKmsFolderKajPolicyConfig` Submodule <a name="`googleKmsFolderKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsFolderKajPolicyConfig <a name="GoogleKmsFolderKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config google_kms_folder_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.NewGoogleKmsFolderKajPolicyConfig(scope Construct, id *string, config GoogleKmsFolderKajPolicyConfigConfig) GoogleKmsFolderKajPolicyConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig">GoogleKmsFolderKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig">GoogleKmsFolderKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">PutDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">ResetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultKeyAccessJustificationPolicy` <a name="PutDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```go
func PutDefaultKeyAccessJustificationPolicy(value GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleKmsFolderKajPolicyConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---

##### `ResetDefaultKeyAccessJustificationPolicy` <a name="ResetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```go
func ResetDefaultKeyAccessJustificationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleKmsFolderKajPolicyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleKmsFolderKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsFolderKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">DefaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```go
func DefaultKeyAccessJustificationPolicy() GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts"></a>

```go
func Timeouts() GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a>

---

##### `DefaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```go
func DefaultKeyAccessJustificationPolicyInput() GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsFolderKajPolicyConfigConfig <a name="GoogleKmsFolderKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

&googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Folder: *string,
	DefaultKeyAccessJustificationPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder">Folder</a></code> | <code>*string</code> | The numeric folder number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The numeric folder number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#folder GoogleKmsFolderKajPolicyConfig#folder}

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```go
DefaultKeyAccessJustificationPolicy GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#default_key_access_justification_policy GoogleKmsFolderKajPolicyConfig#default_key_access_justification_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleKmsFolderKajPolicyConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#timeouts GoogleKmsFolderKajPolicyConfig#timeouts}

---

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

&googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy {
	AllowedAccessReasons: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `AllowedAccessReasons`<sup>Optional</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```go
AllowedAccessReasons *[]*string
```

- *Type:* *[]*string

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#allowed_access_reasons GoogleKmsFolderKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsFolderKajPolicyConfigTimeouts <a name="GoogleKmsFolderKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

&googlekmsfolderkajpolicyconfig.GoogleKmsFolderKajPolicyConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.NewGoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">ResetAllowedAccessReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAccessReasons` <a name="ResetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```go
func ResetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">AllowedAccessReasonsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAccessReasonsInput`<sup>Optional</sup> <a name="AllowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```go
func AllowedAccessReasonsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```go
func AllowedAccessReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsfolderkajpolicyconfig"

googlekmsfolderkajpolicyconfig.NewGoogleKmsFolderKajPolicyConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



