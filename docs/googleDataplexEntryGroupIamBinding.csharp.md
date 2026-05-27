# `googleDataplexEntryGroupIamBinding` Submodule <a name="`googleDataplexEntryGroupIamBinding` Submodule" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntryGroupIamBinding <a name="GoogleDataplexEntryGroupIamBinding" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding google_dataplex_entry_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryGroupIamBinding(Construct Scope, string Id, GoogleDataplexEntryGroupIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig">GoogleDataplexEntryGroupIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig">GoogleDataplexEntryGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleDataplexEntryGroupIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexEntryGroupIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryGroupIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryGroupIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryGroupIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryGroupIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataplexEntryGroupIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexEntryGroupIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexEntryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference">GoogleDataplexEntryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.entryGroupIdInput">EntryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.entryGroupId">EntryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.condition"></a>

```csharp
public GoogleDataplexEntryGroupIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference">GoogleDataplexEntryGroupIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.conditionInput"></a>

```csharp
public GoogleDataplexEntryGroupIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a>

---

##### `EntryGroupIdInput`<sup>Optional</sup> <a name="EntryGroupIdInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.entryGroupIdInput"></a>

```csharp
public string EntryGroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.entryGroupId"></a>

```csharp
public string EntryGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryGroupIamBindingCondition <a name="GoogleDataplexEntryGroupIamBindingCondition" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryGroupIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#expression GoogleDataplexEntryGroupIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#title GoogleDataplexEntryGroupIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#description GoogleDataplexEntryGroupIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#expression GoogleDataplexEntryGroupIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#title GoogleDataplexEntryGroupIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#description GoogleDataplexEntryGroupIamBinding#description}.

---

### GoogleDataplexEntryGroupIamBindingConfig <a name="GoogleDataplexEntryGroupIamBindingConfig" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryGroupIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EntryGroupId,
    string[] Members,
    string Role,
    GoogleDataplexEntryGroupIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.entryGroupId">EntryGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#entry_group_id GoogleDataplexEntryGroupIamBinding#entry_group_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#members GoogleDataplexEntryGroupIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#role GoogleDataplexEntryGroupIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#id GoogleDataplexEntryGroupIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#location GoogleDataplexEntryGroupIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#project GoogleDataplexEntryGroupIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.entryGroupId"></a>

```csharp
public string EntryGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#entry_group_id GoogleDataplexEntryGroupIamBinding#entry_group_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#members GoogleDataplexEntryGroupIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#role GoogleDataplexEntryGroupIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.condition"></a>

```csharp
public GoogleDataplexEntryGroupIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#condition GoogleDataplexEntryGroupIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#id GoogleDataplexEntryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#location GoogleDataplexEntryGroupIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_group_iam_binding#project GoogleDataplexEntryGroupIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryGroupIamBindingConditionOutputReference <a name="GoogleDataplexEntryGroupIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryGroupIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexEntryGroupIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryGroupIamBinding.GoogleDataplexEntryGroupIamBindingCondition">GoogleDataplexEntryGroupIamBindingCondition</a>

---



