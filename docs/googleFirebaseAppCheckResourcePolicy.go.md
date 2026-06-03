# `googleFirebaseAppCheckResourcePolicy` Submodule <a name="`googleFirebaseAppCheckResourcePolicy` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckResourcePolicy <a name="GoogleFirebaseAppCheckResourcePolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy google_firebase_app_check_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

googlefirebaseappcheckresourcepolicy.NewGoogleFirebaseAppCheckResourcePolicy(scope Construct, id *string, config GoogleFirebaseAppCheckResourcePolicyConfig) GoogleFirebaseAppCheckResourcePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig">GoogleFirebaseAppCheckResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig">GoogleFirebaseAppCheckResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode">ResetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAppCheckResourcePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEnforcementMode` <a name="ResetEnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode"></a>

```go
func ResetEnforcementMode()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

googlefirebaseappcheckresourcepolicy.GoogleFirebaseAppCheckResourcePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

googlefirebaseappcheckresourcepolicy.GoogleFirebaseAppCheckResourcePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

googlefirebaseappcheckresourcepolicy.GoogleFirebaseAppCheckResourcePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

googlefirebaseappcheckresourcepolicy.GoogleFirebaseAppCheckResourcePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAppCheckResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAppCheckResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId">ResourcePolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput">TargetResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource">TargetResource</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ResourcePolicyId`<sup>Required</sup> <a name="ResourcePolicyId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId"></a>

```go
func ResourcePolicyId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput"></a>

```go
func TargetResourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource"></a>

```go
func TargetResource() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckResourcePolicyConfig <a name="GoogleFirebaseAppCheckResourcePolicyConfig" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

&googlefirebaseappcheckresourcepolicy.GoogleFirebaseAppCheckResourcePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceId: *string,
	TargetResource: *string,
	DeletionPolicy: *string,
	EnforcementMode: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource">TargetResource</a></code> | <code>*string</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#service_id GoogleFirebaseAppCheckResourcePolicy#service_id}

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource"></a>

```go
TargetResource *string
```

- *Type:* *string

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#target_resource GoogleFirebaseAppCheckResourcePolicy#target_resource}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#deletion_policy GoogleFirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `EnforcementMode`<sup>Optional</sup> <a name="EnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

The App Check enforcement mode for a service supported by App Check.

This will override the EnforcementMode setting on the service.
Valid values are:

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#enforcement_mode GoogleFirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAppCheckResourcePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#timeouts GoogleFirebaseAppCheckResourcePolicy#timeouts}

---

### GoogleFirebaseAppCheckResourcePolicyTimeouts <a name="GoogleFirebaseAppCheckResourcePolicyTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

&googlefirebaseappcheckresourcepolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference <a name="GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseappcheckresourcepolicy"

googlefirebaseappcheckresourcepolicy.NewGoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



