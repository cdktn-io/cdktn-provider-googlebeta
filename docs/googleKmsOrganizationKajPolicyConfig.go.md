# `googleKmsOrganizationKajPolicyConfig` Submodule <a name="`googleKmsOrganizationKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsOrganizationKajPolicyConfig <a name="GoogleKmsOrganizationKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config google_kms_organization_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.NewGoogleKmsOrganizationKajPolicyConfig(scope Construct, id *string, config GoogleKmsOrganizationKajPolicyConfigConfig) GoogleKmsOrganizationKajPolicyConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig">GoogleKmsOrganizationKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig">GoogleKmsOrganizationKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">PutDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">ResetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultKeyAccessJustificationPolicy` <a name="PutDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```go
func PutDefaultKeyAccessJustificationPolicy(value GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleKmsOrganizationKajPolicyConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `ResetDefaultKeyAccessJustificationPolicy` <a name="ResetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```go
func ResetDefaultKeyAccessJustificationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleKmsOrganizationKajPolicyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleKmsOrganizationKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsOrganizationKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">DefaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```go
func DefaultKeyAccessJustificationPolicy() GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts"></a>

```go
func Timeouts() GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a>

---

##### `DefaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```go
func DefaultKeyAccessJustificationPolicyInput() GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsOrganizationKajPolicyConfigConfig <a name="GoogleKmsOrganizationKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

&googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	DefaultKeyAccessJustificationPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#organization GoogleKmsOrganizationKajPolicyConfig#organization}

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```go
DefaultKeyAccessJustificationPolicy GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#default_key_access_justification_policy GoogleKmsOrganizationKajPolicyConfig#default_key_access_justification_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleKmsOrganizationKajPolicyConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#timeouts GoogleKmsOrganizationKajPolicyConfig#timeouts}

---

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

&googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy {
	AllowedAccessReasons: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `AllowedAccessReasons`<sup>Optional</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```go
AllowedAccessReasons *[]*string
```

- *Type:* *[]*string

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#allowed_access_reasons GoogleKmsOrganizationKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsOrganizationKajPolicyConfigTimeouts <a name="GoogleKmsOrganizationKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

&googlekmsorganizationkajpolicyconfig.GoogleKmsOrganizationKajPolicyConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.NewGoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">ResetAllowedAccessReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAccessReasons` <a name="ResetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```go
func ResetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">AllowedAccessReasonsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAccessReasonsInput`<sup>Optional</sup> <a name="AllowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```go
func AllowedAccessReasonsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```go
func AllowedAccessReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlekmsorganizationkajpolicyconfig"

googlekmsorganizationkajpolicyconfig.NewGoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



