# `googleManagedKafkaAclBinding` Submodule <a name="`googleManagedKafkaAclBinding` Submodule" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaAclBinding <a name="GoogleManagedKafkaAclBinding" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding google_managed_kafka_acl_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

googlemanagedkafkaaclbinding.NewGoogleManagedKafkaAclBinding(scope Construct, id *string, config GoogleManagedKafkaAclBindingConfig) GoogleManagedKafkaAclBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig">GoogleManagedKafkaAclBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig">GoogleManagedKafkaAclBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetPermissionType">ResetPermissionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleManagedKafkaAclBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetPermissionType` <a name="ResetPermissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetPermissionType"></a>

```go
func ResetPermissionType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

googlemanagedkafkaaclbinding.GoogleManagedKafkaAclBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

googlemanagedkafkaaclbinding.GoogleManagedKafkaAclBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

googlemanagedkafkaaclbinding.GoogleManagedKafkaAclBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

googlemanagedkafkaaclbinding.GoogleManagedKafkaAclBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleManagedKafkaAclBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleManagedKafkaAclBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleManagedKafkaAclBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaAclBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference">GoogleManagedKafkaAclBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclIdInput">AclIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionTypeInput">PermissionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclId">AclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionType">PermissionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeouts"></a>

```go
func Timeouts() GoogleManagedKafkaAclBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference">GoogleManagedKafkaAclBindingTimeoutsOutputReference</a>

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclIdInput"></a>

```go
func AclIdInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `PermissionTypeInput`<sup>Optional</sup> <a name="PermissionTypeInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionTypeInput"></a>

```go
func PermissionTypeInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.aclId"></a>

```go
func AclId() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.permissionType"></a>

```go
func PermissionType() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaAclBindingConfig <a name="GoogleManagedKafkaAclBindingConfig" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

&googlemanagedkafkaaclbinding.GoogleManagedKafkaAclBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AclId: *string,
	Cluster: *string,
	Location: *string,
	Operation: *string,
	Principal: *string,
	DeletionPolicy: *string,
	Host: *string,
	Id: *string,
	PermissionType: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.aclId">AclId</a></code> | <code>*string</code> | The ID of the acl this entry belongs to, which is the final component of the acl's name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The cluster name. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.operation">Operation</a></code> | <code>*string</code> | The operation type. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.principal">Principal</a></code> | <code>*string</code> | The principal. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.host">Host</a></code> | <code>*string</code> | The host. Must be set to "*" for Managed Service for Apache Kafka. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.permissionType">PermissionType</a></code> | <code>*string</code> | The permission type. Accepted values are (case insensitive): ALLOW, DENY. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.aclId"></a>

```go
AclId *string
```

- *Type:* *string

The ID of the acl this entry belongs to, which is the final component of the acl's name.

The structure of 'aclId' defines the Resource
Pattern (resource_type, resource_name, pattern_type) of the acl.
'aclId' is structured like one of the following:
For acls on the cluster: 'cluster'
For acls on a single resource within the cluster: 'topic/{resource_name}' 'consumerGroup/{resource_name}' 'transactionalId/{resource_name}'
For acls on all resources that match a prefix: 'topicPrefixed/{resource_name}' 'consumerGroupPrefixed/{resource_name}' 'transactionalIdPrefixed/{resource_name}'
For acls on all resources of a given type (i.e. the wildcard literal '*''): 'allTopics' (represents 'topic/*') 'allConsumerGroups' (represents 'consumerGroup/*') 'allTransactionalIds' (represents 'transactionalId/*').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#acl_id GoogleManagedKafkaAclBinding#acl_id}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#cluster GoogleManagedKafkaAclBinding#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#location GoogleManagedKafkaAclBinding#location}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

The operation type.

Allowed values are (case insensitive): ALL, READ,
WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS,
ALTER_CONFIGS, and IDEMPOTENT_WRITE. See
https://kafka.apache.org/documentation/#operations_resources_and_protocols
for valid combinations of resource_type and operation for different
Kafka API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#operation GoogleManagedKafkaAclBinding#operation}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

The principal.

Specified as a Google Cloud account, with the Kafka
StandardAuthorizer prefix "User:". For example:
"User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be
the wildcard "User:*" to refer to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#principal GoogleManagedKafkaAclBinding#principal}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#deletion_policy GoogleManagedKafkaAclBinding#deletion_policy}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The host. Must be set to "*" for Managed Service for Apache Kafka.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#host GoogleManagedKafkaAclBinding#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#id GoogleManagedKafkaAclBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PermissionType`<sup>Optional</sup> <a name="PermissionType" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.permissionType"></a>

```go
PermissionType *string
```

- *Type:* *string

The permission type. Accepted values are (case insensitive): ALLOW, DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#permission_type GoogleManagedKafkaAclBinding#permission_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#project GoogleManagedKafkaAclBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleManagedKafkaAclBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts">GoogleManagedKafkaAclBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#timeouts GoogleManagedKafkaAclBinding#timeouts}

---

### GoogleManagedKafkaAclBindingTimeouts <a name="GoogleManagedKafkaAclBindingTimeouts" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

&googlemanagedkafkaaclbinding.GoogleManagedKafkaAclBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#create GoogleManagedKafkaAclBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#delete GoogleManagedKafkaAclBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#update GoogleManagedKafkaAclBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#create GoogleManagedKafkaAclBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#delete GoogleManagedKafkaAclBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_managed_kafka_acl_binding#update GoogleManagedKafkaAclBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaAclBindingTimeoutsOutputReference <a name="GoogleManagedKafkaAclBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlemanagedkafkaaclbinding"

googlemanagedkafkaaclbinding.NewGoogleManagedKafkaAclBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaAclBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleManagedKafkaAclBinding.GoogleManagedKafkaAclBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



