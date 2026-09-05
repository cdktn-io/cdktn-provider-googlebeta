# `googleCloudSupportSupportEventSubscription` Submodule <a name="`googleCloudSupportSupportEventSubscription` Submodule" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSupportSupportEventSubscription <a name="GoogleCloudSupportSupportEventSubscription" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription google_cloud_support_support_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

googlecloudsupportsupporteventsubscription.NewGoogleCloudSupportSupportEventSubscription(scope Construct, id *string, config GoogleCloudSupportSupportEventSubscriptionConfig) GoogleCloudSupportSupportEventSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig">GoogleCloudSupportSupportEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig">GoogleCloudSupportSupportEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudSupportSupportEventSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts">GoogleCloudSupportSupportEventSubscriptionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudSupportSupportEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

googlecloudsupportsupporteventsubscription.GoogleCloudSupportSupportEventSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

googlecloudsupportsupporteventsubscription.GoogleCloudSupportSupportEventSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

googlecloudsupportsupporteventsubscription.GoogleCloudSupportSupportEventSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

googlecloudsupportsupporteventsubscription.GoogleCloudSupportSupportEventSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCloudSupportSupportEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudSupportSupportEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudSupportSupportEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudSupportSupportEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference">GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.pubSubTopicInput">PubSubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.pubSubTopic">PubSubTopic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.timeouts"></a>

```go
func Timeouts() GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference">GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PubSubTopicInput`<sup>Optional</sup> <a name="PubSubTopicInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.pubSubTopicInput"></a>

```go
func PubSubTopicInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PubSubTopic`<sup>Required</sup> <a name="PubSubTopic" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.pubSubTopic"></a>

```go
func PubSubTopic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSupportSupportEventSubscriptionConfig <a name="GoogleCloudSupportSupportEventSubscriptionConfig" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

&googlecloudsupportsupporteventsubscription.GoogleCloudSupportSupportEventSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	PubSubTopic: *string,
	DeletionPolicy: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization ID for the support event subscription. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.pubSubTopic">PubSubTopic</a></code> | <code>*string</code> | The name of the Pub/Sub topic to publish notifications to. Format: projects/{project}/topics/{topic}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#id GoogleCloudSupportSupportEventSubscription#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts">GoogleCloudSupportSupportEventSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization ID for the support event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#organization GoogleCloudSupportSupportEventSubscription#organization}

---

##### `PubSubTopic`<sup>Required</sup> <a name="PubSubTopic" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.pubSubTopic"></a>

```go
PubSubTopic *string
```

- *Type:* *string

The name of the Pub/Sub topic to publish notifications to. Format: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#pub_sub_topic GoogleCloudSupportSupportEventSubscription#pub_sub_topic}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#deletion_policy GoogleCloudSupportSupportEventSubscription#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#id GoogleCloudSupportSupportEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudSupportSupportEventSubscriptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts">GoogleCloudSupportSupportEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#timeouts GoogleCloudSupportSupportEventSubscription#timeouts}

---

### GoogleCloudSupportSupportEventSubscriptionTimeouts <a name="GoogleCloudSupportSupportEventSubscriptionTimeouts" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

&googlecloudsupportsupporteventsubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#create GoogleCloudSupportSupportEventSubscription#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#delete GoogleCloudSupportSupportEventSubscription#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#update GoogleCloudSupportSupportEventSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#create GoogleCloudSupportSupportEventSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#delete GoogleCloudSupportSupportEventSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_cloud_support_support_event_subscription#update GoogleCloudSupportSupportEventSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference <a name="GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecloudsupportsupporteventsubscription"

googlecloudsupportsupporteventsubscription.NewGoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSupportSupportEventSubscription.GoogleCloudSupportSupportEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



