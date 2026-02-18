# `googleIdentityPlatformDefaultSupportedIdpConfig` Submodule <a name="`googleIdentityPlatformDefaultSupportedIdpConfig` Submodule" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformDefaultSupportedIdpConfig <a name="GoogleIdentityPlatformDefaultSupportedIdpConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config google_identity_platform_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

googleidentityplatformdefaultsupportedidpconfig.NewGoogleIdentityPlatformDefaultSupportedIdpConfig(scope Construct, id *string, config GoogleIdentityPlatformDefaultSupportedIdpConfigConfig) GoogleIdentityPlatformDefaultSupportedIdpConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig">GoogleIdentityPlatformDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig">GoogleIdentityPlatformDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIdentityPlatformDefaultSupportedIdpConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

googleidentityplatformdefaultsupportedidpconfig.GoogleIdentityPlatformDefaultSupportedIdpConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

googleidentityplatformdefaultsupportedidpconfig.GoogleIdentityPlatformDefaultSupportedIdpConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

googleidentityplatformdefaultsupportedidpconfig.GoogleIdentityPlatformDefaultSupportedIdpConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

googleidentityplatformdefaultsupportedidpconfig.GoogleIdentityPlatformDefaultSupportedIdpConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleIdentityPlatformDefaultSupportedIdpConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIdentityPlatformDefaultSupportedIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIdentityPlatformDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput">IdpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpId">IdpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeouts"></a>

```go
func Timeouts() GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput"></a>

```go
func IdpIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpId"></a>

```go
func IdpId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformDefaultSupportedIdpConfigConfig <a name="GoogleIdentityPlatformDefaultSupportedIdpConfigConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

&googleidentityplatformdefaultsupportedidpconfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	ClientSecret: *string,
	IdpId: *string,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId">IdpId</a></code> | <code>*string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#id GoogleIdentityPlatformDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#project GoogleIdentityPlatformDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#client_id GoogleIdentityPlatformDefaultSupportedIdpConfig#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#client_secret GoogleIdentityPlatformDefaultSupportedIdpConfig#client_secret}

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId"></a>

```go
IdpId *string
```

- *Type:* *string

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#idp_id GoogleIdentityPlatformDefaultSupportedIdpConfig#idp_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#enabled GoogleIdentityPlatformDefaultSupportedIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#id GoogleIdentityPlatformDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#project GoogleIdentityPlatformDefaultSupportedIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#timeouts GoogleIdentityPlatformDefaultSupportedIdpConfig#timeouts}

---

### GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts <a name="GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

&googleidentityplatformdefaultsupportedidpconfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#create GoogleIdentityPlatformDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#delete GoogleIdentityPlatformDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#update GoogleIdentityPlatformDefaultSupportedIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#create GoogleIdentityPlatformDefaultSupportedIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#delete GoogleIdentityPlatformDefaultSupportedIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_identity_platform_default_supported_idp_config#update GoogleIdentityPlatformDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleidentityplatformdefaultsupportedidpconfig"

googleidentityplatformdefaultsupportedidpconfig.NewGoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



