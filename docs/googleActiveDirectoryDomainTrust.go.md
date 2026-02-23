# `googleActiveDirectoryDomainTrust` Submodule <a name="`googleActiveDirectoryDomainTrust` Submodule" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleActiveDirectoryDomainTrust <a name="GoogleActiveDirectoryDomainTrust" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust google_active_directory_domain_trust}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

googleactivedirectorydomaintrust.NewGoogleActiveDirectoryDomainTrust(scope Construct, id *string, config GoogleActiveDirectoryDomainTrustConfig) GoogleActiveDirectoryDomainTrust
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig">GoogleActiveDirectoryDomainTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig">GoogleActiveDirectoryDomainTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetSelectiveAuthentication">ResetSelectiveAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts"></a>

```go
func PutTimeouts(value GoogleActiveDirectoryDomainTrustTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSelectiveAuthentication` <a name="ResetSelectiveAuthentication" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetSelectiveAuthentication"></a>

```go
func ResetSelectiveAuthentication()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleActiveDirectoryDomainTrust resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

googleactivedirectorydomaintrust.GoogleActiveDirectoryDomainTrust_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

googleactivedirectorydomaintrust.GoogleActiveDirectoryDomainTrust_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

googleactivedirectorydomaintrust.GoogleActiveDirectoryDomainTrust_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

googleactivedirectorydomaintrust.GoogleActiveDirectoryDomainTrust_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleActiveDirectoryDomainTrust resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleActiveDirectoryDomainTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleActiveDirectoryDomainTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleActiveDirectoryDomainTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference">GoogleActiveDirectoryDomainTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthenticationInput">SelectiveAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput">TargetDnsIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainNameInput">TargetDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirectionInput">TrustDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecretInput">TrustHandshakeSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustTypeInput">TrustTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthentication">SelectiveAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddresses">TargetDnsIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainName">TargetDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirection">TrustDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecret">TrustHandshakeSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustType">TrustType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeouts"></a>

```go
func Timeouts() GoogleActiveDirectoryDomainTrustTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference">GoogleActiveDirectoryDomainTrustTimeoutsOutputReference</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SelectiveAuthenticationInput`<sup>Optional</sup> <a name="SelectiveAuthenticationInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthenticationInput"></a>

```go
func SelectiveAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `TargetDnsIpAddressesInput`<sup>Optional</sup> <a name="TargetDnsIpAddressesInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput"></a>

```go
func TargetDnsIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetDomainNameInput`<sup>Optional</sup> <a name="TargetDomainNameInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainNameInput"></a>

```go
func TargetDomainNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustDirectionInput`<sup>Optional</sup> <a name="TrustDirectionInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirectionInput"></a>

```go
func TrustDirectionInput() *string
```

- *Type:* *string

---

##### `TrustHandshakeSecretInput`<sup>Optional</sup> <a name="TrustHandshakeSecretInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecretInput"></a>

```go
func TrustHandshakeSecretInput() *string
```

- *Type:* *string

---

##### `TrustTypeInput`<sup>Optional</sup> <a name="TrustTypeInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustTypeInput"></a>

```go
func TrustTypeInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SelectiveAuthentication`<sup>Required</sup> <a name="SelectiveAuthentication" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthentication"></a>

```go
func SelectiveAuthentication() interface{}
```

- *Type:* interface{}

---

##### `TargetDnsIpAddresses`<sup>Required</sup> <a name="TargetDnsIpAddresses" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddresses"></a>

```go
func TargetDnsIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainName"></a>

```go
func TargetDomainName() *string
```

- *Type:* *string

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirection"></a>

```go
func TrustDirection() *string
```

- *Type:* *string

---

##### `TrustHandshakeSecret`<sup>Required</sup> <a name="TrustHandshakeSecret" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecret"></a>

```go
func TrustHandshakeSecret() *string
```

- *Type:* *string

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustType"></a>

```go
func TrustType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleActiveDirectoryDomainTrustConfig <a name="GoogleActiveDirectoryDomainTrustConfig" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

&googleactivedirectorydomaintrust.GoogleActiveDirectoryDomainTrustConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	TargetDnsIpAddresses: *[]*string,
	TargetDomainName: *string,
	TrustDirection: *string,
	TrustHandshakeSecret: *string,
	TrustType: *string,
	Id: *string,
	Project: *string,
	SelectiveAuthentication: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.domain">Domain</a></code> | <code>*string</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses">TargetDnsIpAddresses</a></code> | <code>*[]*string</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDomainName">TargetDomainName</a></code> | <code>*string</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustDirection">TrustDirection</a></code> | <code>*string</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret">TrustHandshakeSecret</a></code> | <code>*string</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustType">TrustType</a></code> | <code>*string</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#id GoogleActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#project GoogleActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.selectiveAuthentication">SelectiveAuthentication</a></code> | <code>interface{}</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#domain GoogleActiveDirectoryDomainTrust#domain}

---

##### `TargetDnsIpAddresses`<sup>Required</sup> <a name="TargetDnsIpAddresses" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses"></a>

```go
TargetDnsIpAddresses *[]*string
```

- *Type:* *[]*string

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#target_dns_ip_addresses GoogleActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDomainName"></a>

```go
TargetDomainName *string
```

- *Type:* *string

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#target_domain_name GoogleActiveDirectoryDomainTrust#target_domain_name}

---

##### `TrustDirection`<sup>Required</sup> <a name="TrustDirection" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustDirection"></a>

```go
TrustDirection *string
```

- *Type:* *string

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#trust_direction GoogleActiveDirectoryDomainTrust#trust_direction}

---

##### `TrustHandshakeSecret`<sup>Required</sup> <a name="TrustHandshakeSecret" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret"></a>

```go
TrustHandshakeSecret *string
```

- *Type:* *string

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#trust_handshake_secret GoogleActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `TrustType`<sup>Required</sup> <a name="TrustType" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustType"></a>

```go
TrustType *string
```

- *Type:* *string

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#trust_type GoogleActiveDirectoryDomainTrust#trust_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#id GoogleActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#project GoogleActiveDirectoryDomainTrust#project}.

---

##### `SelectiveAuthentication`<sup>Optional</sup> <a name="SelectiveAuthentication" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.selectiveAuthentication"></a>

```go
SelectiveAuthentication interface{}
```

- *Type:* interface{}

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#selective_authentication GoogleActiveDirectoryDomainTrust#selective_authentication}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.timeouts"></a>

```go
Timeouts GoogleActiveDirectoryDomainTrustTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#timeouts GoogleActiveDirectoryDomainTrust#timeouts}

---

### GoogleActiveDirectoryDomainTrustTimeouts <a name="GoogleActiveDirectoryDomainTrustTimeouts" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

&googleactivedirectorydomaintrust.GoogleActiveDirectoryDomainTrustTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#create GoogleActiveDirectoryDomainTrust#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#delete GoogleActiveDirectoryDomainTrust#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#update GoogleActiveDirectoryDomainTrust#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#create GoogleActiveDirectoryDomainTrust#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#delete GoogleActiveDirectoryDomainTrust#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_active_directory_domain_trust#update GoogleActiveDirectoryDomainTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleActiveDirectoryDomainTrustTimeoutsOutputReference <a name="GoogleActiveDirectoryDomainTrustTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleactivedirectorydomaintrust"

googleactivedirectorydomaintrust.NewGoogleActiveDirectoryDomainTrustTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleActiveDirectoryDomainTrustTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



