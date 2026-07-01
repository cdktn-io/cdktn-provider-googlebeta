# `googleBiglakeHiveDatabaseIamBinding` Submodule <a name="`googleBiglakeHiveDatabaseIamBinding` Submodule" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeHiveDatabaseIamBinding <a name="GoogleBiglakeHiveDatabaseIamBinding" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding google_biglake_hive_database_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeHiveDatabaseIamBinding(Construct Scope, string Id, GoogleBiglakeHiveDatabaseIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig">GoogleBiglakeHiveDatabaseIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig">GoogleBiglakeHiveDatabaseIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleBiglakeHiveDatabaseIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeHiveDatabaseIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeHiveDatabaseIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeHiveDatabaseIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeHiveDatabaseIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeHiveDatabaseIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBiglakeHiveDatabaseIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeHiveDatabaseIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeHiveDatabaseIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeHiveDatabaseIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference">GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.condition"></a>

```csharp
public GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference">GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.conditionInput"></a>

```csharp
public GoogleBiglakeHiveDatabaseIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeHiveDatabaseIamBindingCondition <a name="GoogleBiglakeHiveDatabaseIamBindingCondition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeHiveDatabaseIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#expression GoogleBiglakeHiveDatabaseIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#title GoogleBiglakeHiveDatabaseIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#description GoogleBiglakeHiveDatabaseIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#expression GoogleBiglakeHiveDatabaseIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#title GoogleBiglakeHiveDatabaseIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#description GoogleBiglakeHiveDatabaseIamBinding#description}.

---

### GoogleBiglakeHiveDatabaseIamBindingConfig <a name="GoogleBiglakeHiveDatabaseIamBindingConfig" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeHiveDatabaseIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Catalog,
    string[] Members,
    string Name,
    string Role,
    GoogleBiglakeHiveDatabaseIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#catalog GoogleBiglakeHiveDatabaseIamBinding#catalog}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#members GoogleBiglakeHiveDatabaseIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#name GoogleBiglakeHiveDatabaseIamBinding#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#role GoogleBiglakeHiveDatabaseIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#id GoogleBiglakeHiveDatabaseIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#project GoogleBiglakeHiveDatabaseIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#catalog GoogleBiglakeHiveDatabaseIamBinding#catalog}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#members GoogleBiglakeHiveDatabaseIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#name GoogleBiglakeHiveDatabaseIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#role GoogleBiglakeHiveDatabaseIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.condition"></a>

```csharp
public GoogleBiglakeHiveDatabaseIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#condition GoogleBiglakeHiveDatabaseIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#id GoogleBiglakeHiveDatabaseIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.39.0/docs/resources/google_biglake_hive_database_iam_binding#project GoogleBiglakeHiveDatabaseIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference <a name="GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeHiveDatabaseIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveDatabaseIamBinding.GoogleBiglakeHiveDatabaseIamBindingCondition">GoogleBiglakeHiveDatabaseIamBindingCondition</a>

---



