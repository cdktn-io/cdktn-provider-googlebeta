# `googleOrganizationServiceIdentity` Submodule <a name="`googleOrganizationServiceIdentity` Submodule" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationServiceIdentity <a name="GoogleOrganizationServiceIdentity" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity google_organization_service_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

googleorganizationserviceidentity.NewGoogleOrganizationServiceIdentity(scope Construct, id *string, config GoogleOrganizationServiceIdentityConfig) GoogleOrganizationServiceIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig">GoogleOrganizationServiceIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig">GoogleOrganizationServiceIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOrganizationServiceIdentityTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts">GoogleOrganizationServiceIdentityTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOrganizationServiceIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

googleorganizationserviceidentity.GoogleOrganizationServiceIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

googleorganizationserviceidentity.GoogleOrganizationServiceIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

googleorganizationserviceidentity.GoogleOrganizationServiceIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

googleorganizationserviceidentity.GoogleOrganizationServiceIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleOrganizationServiceIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOrganizationServiceIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOrganizationServiceIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationServiceIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference">GoogleOrganizationServiceIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.timeouts"></a>

```go
func Timeouts() GoogleOrganizationServiceIdentityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference">GoogleOrganizationServiceIdentityTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationServiceIdentityConfig <a name="GoogleOrganizationServiceIdentityConfig" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

&googleorganizationserviceidentity.GoogleOrganizationServiceIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	Service: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#organization GoogleOrganizationServiceIdentity#organization}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#service GoogleOrganizationServiceIdentity#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#id GoogleOrganizationServiceIdentity#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts">GoogleOrganizationServiceIdentityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#organization GoogleOrganizationServiceIdentity#organization}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#service GoogleOrganizationServiceIdentity#service}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#id GoogleOrganizationServiceIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityConfig.property.timeouts"></a>

```go
Timeouts GoogleOrganizationServiceIdentityTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts">GoogleOrganizationServiceIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#timeouts GoogleOrganizationServiceIdentity#timeouts}

---

### GoogleOrganizationServiceIdentityTimeouts <a name="GoogleOrganizationServiceIdentityTimeouts" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

&googleorganizationserviceidentity.GoogleOrganizationServiceIdentityTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#create GoogleOrganizationServiceIdentity#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#delete GoogleOrganizationServiceIdentity#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#read GoogleOrganizationServiceIdentity#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#create GoogleOrganizationServiceIdentity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#delete GoogleOrganizationServiceIdentity#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_organization_service_identity#read GoogleOrganizationServiceIdentity#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationServiceIdentityTimeoutsOutputReference <a name="GoogleOrganizationServiceIdentityTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleorganizationserviceidentity"

googleorganizationserviceidentity.NewGoogleOrganizationServiceIdentityTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOrganizationServiceIdentityTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleOrganizationServiceIdentity.GoogleOrganizationServiceIdentityTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



